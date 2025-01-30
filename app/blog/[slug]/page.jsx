import React from "react";
import DynamicBlog from "../../../components/Blog/DynamicBlog";

const page = async ({ params }) => {
  const slug = (await params).slug;
  console.log({slug})

  return <DynamicBlog slug={slug} />;
};

export default page;
