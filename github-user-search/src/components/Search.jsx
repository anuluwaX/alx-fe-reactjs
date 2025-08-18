import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Looks like we cant find the user</p>}
        {user && (
          <div>
            <img src={user.avatar_url} alt={user.login} width="100" />
            <h2>{user.name || user.login}</h2>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              Visit GitHub Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
