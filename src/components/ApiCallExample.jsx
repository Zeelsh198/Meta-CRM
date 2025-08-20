import React, { useEffect } from "react";

const ApiCallExample = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fairly-whole-hawk.ngrok-free.app/search?city=Macon&country=&industry=&designation=&organization=&email=rmartin@macon.com&mobile=&teamsize=&seniority=",
          {
            method: "GET",
            headers: {
              "ngrok-skip-browser-warning": "true",
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }

        const data = await response.json();
        console.log("API Response:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <h1>Check console for API response</h1>;
};

export default ApiCallExample;
