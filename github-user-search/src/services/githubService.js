// services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";

export const searchUsers = async (query, location, minRepos, page = 1) => {
  let q = query ? `${query}` : "";

  if (location) q += `+location:${location}`;
  if (minRepos) q += `+repos:>=${minRepos}`;

  const response = await axios.get(`${BASE_URL}/search/users`, {
    params: { q, page, per_page: 10 },
  });

  return response.data;
};
