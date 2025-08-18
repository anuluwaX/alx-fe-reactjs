// src/services/githubService.js

const BASE_URL = "https://api.github.com/users";

/**
 * Fetch a GitHub user's data
 * @param {string} username - GitHub username
 * @returns {Promise<object>} user data from GitHub API
 */
export async function fetchUserData(username) {
  try {
    const response = await fetch(`${BASE_URL}/${username}`);
    if (!response.ok) {
      throw new Error("User not found");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}