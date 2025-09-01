import React from "react";
import { useParams } from "react-router-dom";

const recipes = [
  { id: 1, title: "Spaghetti Bolognese", description: "Classic Italian pasta with rich sauce." },
  { id: 2, title: "Chicken Curry", description: "Spicy, creamy, and delicious curry." },
  { id: 3, title: "Fried Rice", description: "Quick stir-fried rice with veggies." }
];

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return <h2 className="p-6 text-red-500">Recipe not found</h2>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
      <p className="text-gray-700">{recipe.description}</p>
    </div>
  );
}

