import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can’t find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container p-6">
      <form onSubmit={handleSearch} className="flex space-x-2">
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {userData && (
          <div className="user-info flex items-center space-x-4">
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="font-bold text-lg">{userData.name || userData.login}</h2>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
