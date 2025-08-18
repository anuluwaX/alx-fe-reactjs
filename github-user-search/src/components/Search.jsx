import { useState } from "react";
import { getUser } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(""); 
    setUserData(null);

    try {
      const data = await getUser(username);
      if (data.message === "Not Found") {
        setError("Looks like we can't find the user");
      } else {
        setUserData(data);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {error && <p>{error}</p>}

      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>@{userData.login}</p>
          <img src={userData.avatar_url} alt={userData.login} width={100} />
        </div>
      )}
    </div>
  );
}
