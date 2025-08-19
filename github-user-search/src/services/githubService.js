// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";

// Read token from environment variable
const token = process.env.REACT_APP_GITHUB_TOKEN;

// Function to search users with optional location and minimum repos
export const searchUsers = async (query, location, minRepos, page = 1) => {
  let q = query ? `${query}` : "";

  if (location) q += `+location:${location}`;
  if (minRepos) q += `+repos:>=${minRepos}`;

  const response = await axios.get(`${BASE_URL}/search/users`, {
    params: { q, page, per_page: 10 },
    headers: {
      Authorization: token ? `token ${token}` : undefined,
    },
  });

  return response.data;
};
