import React from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div>
      <h1>GitHub User Search App</h1>
      <SearchBar />
      <UserCard />
    </div>
  );
}

export default App;
