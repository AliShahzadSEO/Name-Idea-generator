"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "../HeroSection/HeroSection";
import Footer from "../Footer/Footer";
import Link from "next/link";

const BlogMain = () => {
  const bgImage = "/bg2.jpg";
  const context = "Blogs";
  const [data, setData] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  console.log('Blogs are',data);

  useEffect(() => {
    const fetchHygraphData = async () => {
      const endpoint =
        "https://ap-south-1.cdn.hygraph.com/content/cm5gp1k6r008v07uljwcl0fg0/master";

      const query = `
        query {
          blog {
            slug
            categories {
              name
              slug
            }
            coverImage {
              url
            }
            heading
            metaTile
            metaDescription
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
        console.log(result.data); // Check the structure here

        if (result.data && result.data.blog) {
          setData(result.data.blog); // Set the correct nested data
        } else {
          console.error("Unexpected data structure:", result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchHygraphData();

    const fetchAllCate = async () => {
      const endpoint =
        "https://ap-south-1.cdn.hygraph.com/content/cm5gp1k6r008v07uljwcl0fg0/master";

      const query = `query {
  categoryConnection {
    edges {
      node {
        name
        slug
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
        console.log(result); // Check the structure here

        if (result.data && result.data.categoryConnection) {
          setAllCategory(result.data.categoryConnection.edges); // Set the correct nested data
        } else {
          console.error("Unexpected data structure:", result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAllCate();
  }, []);
  console.log(allCategory);

  return (
    <div>
      <HeroSection bgImage={bgImage} context={context} />

      <div className="my-4 w-[85%] mx-auto">
        <div className="text-[28px] font-bold">Blogs</div>
        <div className="flex items-center gap-2 my-4">
          <div className="text-xl font-semibold">Categories:</div>
          {allCategory.map((val, index) => (
            <Link
              href={`/blog/category/${val.node.slug}`}
              key={index}
              className="px-2 "
            >
              {val.node.name}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.map((val, index) => {
            return (
              <Link
                href={`/blog/${val.slug}`}
                className="py-2 flex flex-col shadow-md p-2 rounded-lg hover:scale-105 duration-300"
                key={index}
              >
                <div className="h-[300px]">
                  <img
                    src={val.coverImage.url}
                    alt=""
                    className="w-full h-full  rounded-md"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="pt-2 text-xl font-semibold">{val.heading}</p>
                </div>
                <p className="pt-2 text-sm">
                  {val.metaDescription.split(" ").length > 9
                    ? val.metaDescription.split(" ").slice(0, 9).join(" ") +
                    "..."
                    : val.metaDescription}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogMain;
