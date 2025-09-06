import { useState } from "react";

// A custom hook for managing recipes
export function useRecipeStore(initialRecipes = []) {
  const [recipes, setRecipes] = useState(initialRecipes);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return { recipes, addRecipe };
}
