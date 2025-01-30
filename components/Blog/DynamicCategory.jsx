"use client";

import React, { useEffect, useState } from "react";
import HeroSection from "../HeroSection/HeroSection";
import { randomInt } from "crypto";
import Link from "next/link";
import Footer from "../Footer/Footer";
import { usePathname } from "next/navigation";
import path from "path";

const DynamicCategory = ({ slug }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const[CategoryName,setCategoryName]= useState("")
  const pathname = usePathname();

  function getLastSegment(url) {
    return url.split("/").pop();
  }

  useEffect(() => {
    setCategoryName(getLastSegment(pathname))
    const fetchHygraphData = async () => {
      const endpoint =
        "https://ap-south-1.cdn.hygraph.com/content/cm5gp1k6r008v07uljwcl0fg0/master";

      const query = `{
  blogConnection(where: { categories_some: { slug: "${slug.toLowerCase()}" } }) {
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
        // console.log(result);

        if (result.data && result.data.blogConnection) {
          setData(result.data.blogConnection.edges);
          setLoading(false); // Set the correct nested data
        } else {
          console.error("Unexpected data structure:", result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchHygraphData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(data);
  const randomIndex = Math.floor(Math.random() * data.length);
  const randCoverImage = data[randomIndex]?.node.coverImage.url;
  const randCoverContext = data[randomIndex]?.node.heading;
  return (
    <div>
      <HeroSection context={CategoryName} bgImage={randCoverImage} />
      <div className="py-4 w-[85%] mx-auto">
        <div className="mb-4">
          <span className="font-semibold text-xl">Category:</span>
          <span className="px-1">{slug}</span>
        </div>
        <div className="text-[28px] font-bold">Blogs</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.map((val, index) => {
            return (
              <Link
                href={`/blog/${val.node.slug}`}
                className="py-2 flex flex-col shadow-md p-2 rounded-lg hover:scale-105 duration-300"
                key={index}
              >
                <div className="h-[300px]">
                  <img
                    src={val.node.coverImage.url}
                    alt=""
                    className="w-full h-full  rounded-md"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="pt-2 text-xl font-semibold">{val.heading}</p>
                </div>
                <p className="pt-2 text-sm">
                  {val.node.metaDescription.split(" ").length > 20
                    ? val.node.metaDescription
                        .split(" ")
                        .slice(0, 20)
                        .join(" ") + "..."
                    : val.node.metaDescription}
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

export default DynamicCategory;
