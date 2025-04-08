"use client";

import React, { useEffect, useState } from "react";
import HeroSection from "../HeroSection/HeroSection";
import Link from "next/link";
import Footer from "../Footer/Footer";
import { usePathname } from "next/navigation";

const DynamicCategory = ({ slug }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState("");
  const pathname = usePathname();

  function getLastSegment(url) {
    return url.split("/").pop();
  }

  useEffect(() => {
    const categorySlug = slug || getLastSegment(pathname); // Get category slug
    fetchCategoryName(categorySlug);
    fetchHygraphData(categorySlug);
  }, []);

  // Fetch category name from Hygraph
  const fetchCategoryName = async (categorySlug) => {
    if (!categorySlug) return;

    const endpoint =
      "https://ap-south-1.cdn.hygraph.com/content/cm5gp1k6r008v07uljwcl0fg0/master";

    const query = `
      query {
        categories(where: { slug: "${categorySlug.toLowerCase()}" }) {
          name
        }
      }
    `;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const result = await response.json();
    

      if (result.data && result.data.categories) {
        setCategoryName(result.data.categories.name);
      } else {
        setCategoryName("Unknown Category");
      }
    } catch (error) {
      console.error("Error fetching category name:", error);
      setCategoryName("Unknown Category");
    }
  };

  // Fetch blog data from Hygraph
  const fetchHygraphData = async (categorySlug) => {
    const endpoint =
      "https://ap-south-1.cdn.hygraph.com/content/cm5gp1k6r008v07uljwcl0fg0/master";

    const query = `{
      blogConnection(where: { categories_some: { slug: "${categorySlug.toLowerCase()}" } }) {
        edges {
          node {
            slug
            heading
            metaDescription
            coverImage {
              url
            }
          }
        }
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

      if (result.data && result.data.blogConnection) {
        setData(result.data.blogConnection.edges);
      } else {
        console.error("Unexpected data structure:", result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const randomIndex = Math.floor(Math.random() * data.length);
  const randCoverImage = data[randomIndex]?.node.coverImage.url;

  return (
    <div>
      <HeroSection context={categoryName.toUpperCase()} bgImage={randCoverImage} />
      <div className="py-4 w-[85%] mx-auto">
        <div className="mb-4">
          <span className="font-semibold text-xl">Category:</span>
          <span className="px-1">{categoryName}</span>
        </div>
        <div className="text-[28px] font-bold">Blogs</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.map((val, index) => (
            <Link
              href={`/blog/${val.node.slug}`}
              className="py-2 flex flex-col shadow-md p-2 rounded-lg hover:scale-105 duration-300"
              key={index}
            >
              <div className="h-[300px]">
                <img src={val.node.coverImage.url} alt="" className="w-full h-full  rounded-md" />
              </div>
              <div className="flex items-center justify-between">
                <p className="pt-2 text-xl font-semibold">{val.node.heading}</p>
              </div>
              <p className="pt-2 text-sm">
                {val.node.metaDescription.split(" ").length > 20
                  ? val.node.metaDescription.split(" ").slice(0, 20).join(" ") + "..."
                  : val.node.metaDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DynamicCategory;
