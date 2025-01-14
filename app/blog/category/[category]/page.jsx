import DynamicCategory from "../../../../components/Blog/DynamicCategory";
import React from "react";

const page = async ({ params }) => {
  const slug = (await params).category;
  return <DynamicCategory slug={slug} />;
};

export default page;
