import { useState } from "react";

function Search() {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the API fetch here later
    console.log("Searching for:", username);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-center space-x-3 w-full max-w-md bg-white shadow-md rounded-xl p-4"
    >
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username..."
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button 
        type="submit"
        className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}

export default Search;
