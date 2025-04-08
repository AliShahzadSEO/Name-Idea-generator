export const fetchHygraphData = async ({ slug }) => {
    const endpoint = "https://ap-south-1.cdn.hygraph.com/content/cm5gp1k6r008v07uljwcl0fg0/master";

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

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const result = await response.json();

        if (result.data && result.data.blog) {
            // Check if the blog exists, and log the first blog data
            return result.data.blog; // Return the blog data (single object or array as per API response)
        } else {
            console.error("No blog data found for the given slug.");
            return null;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return null; // Return null in case of error
    }
};
