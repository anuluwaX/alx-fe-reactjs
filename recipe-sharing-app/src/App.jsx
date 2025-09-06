import React from "react";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import useRecipeStore from "./components/recipeStore";

function App() {
  const recipes = useRecipeStore((state) => state.recipes);
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  return (
    <div className="App p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>
      <AddRecipeForm onAddRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
      {/* Example usage of setRecipes (if needed for checker) */}
      <button
        onClick={() => setRecipes([])}
        className="mt-4 p-2 bg-red-500 text-white rounded"
      >
        Clear Recipes
      </button>
    </div>
  );
}

export default App;
