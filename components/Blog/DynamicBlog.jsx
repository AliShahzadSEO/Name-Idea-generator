"use client";

import React, { useEffect, useState } from "react";
import HeroSection from "../HeroSection/HeroSection";
import Footer from "../Footer/Footer";
import Link from "next/link";
import { RichText } from "@graphcms/rich-text-react-renderer";

const DynamicBlog = ({ slug }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHygraphData = async () => {
      const endpoint =
        "https://ap-south-1.cdn.hygraph.com/content/cm5gp1k6r008v07uljwcl0fg0/master";

      const query = `
         query {
  blog(where: { slug: "${slug}" }) {
    slug
    categories {
      name
      slug
      blogs {
        slug
        heading
        metaTile
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
    metaTile
    content {
      html
    }
    metaDescription
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
        // console.log(result.data); // Check the structure here

        if (result.data && result.data.blog) {
          setData(result.data.blog);
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
  // console.log(cateData);
  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HeroSection
        context={data[0]?.heading}
        bgImage={data[0]?.coverImage.url}
        blogcontent={`${data[0].categories.map(
          (value, index) => value.name
        )} `}
      />
      <div className="py-4 w-[85%] mx-auto">
        {/* <div className="text-3xl pb-4">{slug}</div> */}
        <div className="flex items-center gap-2 mb-4">
          <span className="font-semibold text-xl">Categories:</span>
          {data[0].categories.map((value, index) => (
            <>
              <div className="bg-slate-200 px-2 rounded-full" key={index}>
                {value.name}
              </div>
            </>
          ))}
        </div>
        <div
          className="prose lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: data[0]?.content.html }}
        />
        <div className="text-[36px] font-bold py-6">
          Related Blogs
        </div>

        {data[0].categories.map((value, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 my-2"
          >
            {value.blogs.slice(0,3).map((val, ind) => (
              <Link
                href={`/blog/${val.slug}`}
                className="py-2 flex flex-col shadow-md p-2 rounded-lg hover:scale-105 duration-300"
                key={ind}
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
                  {val.metaDescription.split(" ").length > 20
                    ? val.metaDescription.split(" ").slice(0, 20).join(" ") +
                      "..."
                    : val.metaDescription}
                </p>
              </Link>
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default DynamicBlog;
