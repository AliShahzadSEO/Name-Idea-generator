import React from "react";
import DynamicBlog from "../../../components/Blog/DynamicBlog";

export async function generateMetadata({ params }) {
  const slug = params.slug;
  
  const fetchHygraphData = async () => {
    const endpoint = "https://ap-south-1.cdn.hygraph.com/content/cm5gp1k6r008v07uljwcl0fg0/master";

    const query = `
      query GetBlogPost($slug: String!) {
        blog(where: { slug: $slug }) {
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
        body: JSON.stringify({
          query,
          variables: { slug }
        }),
      });

      const result = await response.json();

      if (result.errors) {
        console.error("GraphQL Errors:", result.errors);
        return null;
      }

      return result.data?.blog || null;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  const blogData = await fetchHygraphData();
  
  if (!blogData) {
    return {
      title: "Blog Post",
      description: "Read our latest blog post.",
    };
  }

  return {
    title: blogData.metaTitle || blogData.heading || "Blog Post",
    description: blogData.metaDescription || "Read our latest blog post.",
    openGraph: {
      title: blogData.metaTitle || blogData.heading,
      description: blogData.metaDescription,
      images: blogData.coverImage?.url ? [{ url: blogData.coverImage.url }] : [],
    },
    alternates: {
      canonical: `https://www.nameideagenerator.com/blog/${slug}`,
    },
    keywords: blogData.keywordsforblogs?.map(k => k.keyword) || [],
  };
}

const Page = async ({ params }) => {
  return <DynamicBlog slug={params.slug} />;
};

export default Page;