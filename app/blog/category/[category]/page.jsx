// app/blog/category/[category]/page.js (or .tsx)
import DynamicCategory from "@/components/Blog/DynamicCategory";
import { Metadata } from "next";

export async function generateMetadata({ params }) {
  const slug = params.category;

  return {
    title: `${slug.replace(/-/g, " ")} | Name Idea Generator`, // Optional: Set dynamic title
    canonical: `https://www.nameideagenerator.com/blog/category/${slug}`,
    alternates: {
      canonical: `https://www.nameideagenerator.com/blog/category/${slug}`,
    },
  };
}

const Page = async ({ params }) => {
  const slug = params.category;
  return <DynamicCategory slug={slug} />;
};

export default Page;
