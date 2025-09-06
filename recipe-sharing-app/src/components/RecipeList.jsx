import React from "react";
import { Link } from "react-router-dom";
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
          {recipes.map((recipe) => (
            <li key={recipe.id} className="mb-2">
              <Link to={`/recipes/${recipe.id}`} className="text-blue-600">
                {recipe.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
