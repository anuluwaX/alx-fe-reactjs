import React, { useState } from "react";
import { searchUsers } from "../services/githubService";

export default function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSearch = async (e, resetPage = true) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (resetPage) {
      setUsers([]);
      setPage(1);
    }

    try {
      const response = await searchUsers(query, location, minRepos, resetPage ? 1 : page);
      setUsers((prev) => (resetPage ? response.items : [...prev, ...response.items]));
      setHasMore(response.total_count > (resetPage ? response.items.length : users.length + response.items.length));
      setPage((prev) => (resetPage ? 2 : prev + 1));
    } catch (err) {
      setError("Looks like we can’t find users with that criteria.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Search Form */}
      <form onSubmit={(e) => handleSearch(e)} className="space-y-4 bg-gray-100 p-4 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Search by username..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Filter by location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="Minimum repos..."
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
          Search
        </button>
      </form>

      {/* Loading/Error */}
      {loading && <p className="text-gray-500 mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Results */}
      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div key={user.id} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <h2 className="font-bold text-lg">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
              {/* Extra fields (location & repos will require another fetch if needed) */}
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && !loading && (
        <button
          onClick={(e) => handleSearch(e, false)}
          className="mt-6 w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700"
        >
          Load More
        </button>
      )}
    </div>
  );
}
