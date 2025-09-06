import React from "react";

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Recipe List</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
