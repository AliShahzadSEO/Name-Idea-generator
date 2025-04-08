import React from "react";
import DynamicBlog from "../../../components/Blog/DynamicBlog";
import { fetchHygraphData } from "@/components/utils/GenerateMetaData";

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const fetchHygraphData = async () => {
    const endpoint =
      "https://ap-south-1.cdn.hygraph.com/content/cm5gp1k6r008v07uljwcl0fg0/master";

    const query = `
       query {
blog(where: { slug: "${slug}" }) {
   slug
   keywordsforblogs{
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
      });

      const result = await response.json();

      if (result.data && result.data.blog) {
        return result.data.blog

      } else {
        console.error("Unexpected data structure:", result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const data = await fetchHygraphData()
  
  return {
    title: data?.[0]?.metaTitle || "Blog",
    description: data?.[0]?.metaDescription || "Read our latest blog post.",
    openGraph: {
      title: data?.[0]?.metaTitle,
      description: data?.[0]?.metaDescription,
    },
    alternates: {
      canonical: `https://www.nameideagenerator.com/blog/${slug}`,
    },
    keywords: [""],
  };
}



// export async function generateMetadata({ params }) {
//   const slug = params.slug;

//   const query = `
//     query {
//       blog(where: { slug: "${slug}" }) {
//         slug
//         metaTitle
//         metaDescription
//         keywordsforblogs {
//           keyword
//         }
//       }
//     }
//   `;

//   try {
//     const response = await fetch("https://ap-south-1.cdn.hygraph.com/content/cm5gp1k6r008v07uljwcl0fg0/master", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ query }),
//       next: { revalidate: 60 }, // optional: for ISR
//     });

//     const result = await response.json();
//     const blog = result?.data?.blog;

//     if (!blog) {
//       return {
//         title: "Blog",
//         description: "Read our latest blog post.",
//       };
//     }

//     const keywords = blog.keywordsforblogs?.map((k) => k.keyword) || [];

//     return {
//       title: blog.metaTitle || "Blog",
//       description: blog.metaDescription || "Read our latest blog post.",
//       openGraph: {
//         title: blog.metaTitle,
//         description: blog.metaDescription,
//       },
//       alternates: {
//         canonical: `https://www.nameideagenerator.com/blog/${slug}`,
//       },
//       keywords,
//     };
//   } catch (error) {
//     console.error("Error in generateMetadata:", error);
//     return {
//       title: "Blog",
//       description: "Read our latest blog post.",
//     };
//   }
// }
git 

// Main page component
const Page = async ({ params }) => {
  const slug = params.slug;

  return <DynamicBlog slug={slug} />;
};

export default Page;

