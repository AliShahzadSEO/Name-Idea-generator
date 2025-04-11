// app/blog/[slug]/page.jsx (or .tsx if using TypeScript)
import React from "react";
import DynamicBlog from "../../../components/Blog/DynamicBlog";

// ✅ Correct usage of `generateMetadata` in App Router
export async function generateMetadata({ params }) {
  const slug = params.slug;

  const fetchHygraphData = async () => {
    const endpoint =
      "https://ap-south-1.cdn.hygraph.com/content/cm5gp1k6r008v07uljwcl0fg0/master";

    const query = `
      query {
        blog(where: { slug: "${slug}" }) {
          slug
          keywordsforblogs {
            keyword
          }
          categories {
            name
            slug
            blogs {
              slug
              heading
              metaDescription
              coverImage {
                url
              }
            }
          }
          coverImage {
            url
          }
          heading
          content {
            html
          }
          metaDescription
          metaTitle
          schemaMarkup
        }
      }`;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
        // ✅ Important: force-cache or no-store if SSR behavior needed
        cache: "no-store", // or "force-cache" depending on needs
      });

      const result = await response.json();
      return result?.data?.blog || null;
    } catch (error) {
      console.error("Error fetching blog metadata:", error);
      return null;
    }
  };

  const data = await fetchHygraphData();

  if (!data) {
    return {
      title: "Blog Not Found",
      description: "This blog post could not be found.",
    };
  }

  return {
    title: data.metaTitle || "Blog",
    description: data.metaDescription || "Read our latest blog post.",
    openGraph: {
      title: data.metaTitle || "Blog",
      description: data.metaDescription || "Read our latest blog post.",
      images: [data.coverImage?.url].filter(Boolean), // adds OG image
    },
    alternates: {
      canonical: `https://www.nameideagenerator.com/blog/${slug}`,
    },
    keywords: data.keywordsforblogs?.map(k => k.keyword) || [],
  };
}

// ✅ Page Component
const Page = async ({ params }) => {
  const slug = params.slug;
  return <DynamicBlog slug={slug} />;
};

export default Page;
