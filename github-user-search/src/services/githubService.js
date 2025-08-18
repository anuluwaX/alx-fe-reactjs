// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";

const searchUsers = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username}+in:login`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const url = `${BASE_URL}/search/users?q=${query}`;
  const response = await axios.get(url);

  // Fetch additional user details (location, repos count)
  const usersWithDetails = await Promise.all(
    response.data.items.map(async (user) => {
      const detail = await axios.get(`${BASE_URL}/users/${user.login}`);
      return { ...user, ...detail.data };
    })
  );

  return usersWithDetails;
};

export default { searchUsers };
