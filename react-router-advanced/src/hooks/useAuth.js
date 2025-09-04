import { useState, useEffect } from "react";

export const useAuth = () => {
  // ⚡ For now, fake authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Example: check localStorage, API, etc.
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  return { isAuthenticated, setIsAuthenticated };
};
