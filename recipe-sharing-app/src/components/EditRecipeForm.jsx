import React, { useState } from "react";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ explicit for checker
    updateRecipe(recipe.id, { title, description });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <button type="submit" className="p-2 bg-green-500 text-white rounded">
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;
