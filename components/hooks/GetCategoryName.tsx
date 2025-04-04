"use client"
import { useEffect, useState } from "react";

const useCategoryName = (slug: string) => {
  const [categoryName, setCategoryName] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  console.log(slug)

  useEffect(() => {
    if (!slug) return;

    const fetchCategoryName = async () => {
      setLoading(true);
      const endpoint =
        "https://ap-south-1.cdn.hygraph.com/content/cm5gp1k6r008v07uljwcl0fg0/master";

      const query = `
        query GetCategoryName {
          categories(where: { slug: "${slug.toLowerCase()}" }) {
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

        if (result.data && result.data.categories.length > 0) {
          setCategoryName(result.data.categories[0].name);
        } else {
          setCategoryName(null);
        }
      } catch (err) {
        setError("Error fetching category name");
        console.error("Error fetching category name:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryName();
  }, [slug]);

  return { categoryName, loading, error };
};

export default useCategoryName;
