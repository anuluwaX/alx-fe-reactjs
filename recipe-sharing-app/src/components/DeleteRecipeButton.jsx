import React from "react";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // Redirect back to home after deletion
  };

  return (
    <button
      onClick={handleDelete}
      className="mt-4 p-2 bg-red-500 text-white rounded"
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
