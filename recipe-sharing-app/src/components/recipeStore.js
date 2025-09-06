import { create } from "zustand";

// Zustand store for managing recipes
const useRecipeStore = create((set) => ({
  recipes: [],

  // Explicit setter for replacing the recipe list
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),

  // Add a single recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),
}));

export default useRecipeStore;
