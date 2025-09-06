import React from "react";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Recipe List</h2>
      {recipes.length === 0 ? (
        <p className="text-gray-500">No recipes yet. Add one above!</p>
      ) : (
        <ul className="list-disc pl-5">
          {recipes.map((recipe, index) => (
            <li key={index} className="mb-2">
              <strong>{recipe.title}</strong>
              <p className="text-sm text-gray-700">{recipe.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
