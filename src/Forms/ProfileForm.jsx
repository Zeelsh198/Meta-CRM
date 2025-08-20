import React, { useState } from "react";

const UserForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
      alert("API call successful! Check console for response.");
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("API call failed! Check console for error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">User Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="City" className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300" />
        <input type="text" placeholder="Country" className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300" />
        <input type="text" placeholder="Designation" className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300" />
        <input type="text" placeholder="Organization" className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300" />
        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300" />
        <input type="text" placeholder="Mobile" className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300" />
        <input type="text" placeholder="Seniority" className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300" />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
