import React from "react";
import { Link } from "react-router-dom";

const recipes = [
  { id: 1, title: "Spaghetti Bolognese", description: "Classic Italian pasta." },
  { id: 2, title: "Chicken Curry", description: "Spicy and creamy curry." },
  { id: 3, title: "Fried Rice", description: "Quick and tasty rice dish." }
];

export default function HomePage() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <Link 
          key={recipe.id} 
          to={`/recipe/${recipe.id}`} 
          className="block bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
          <p className="text-gray-600">{recipe.description}</p>
        </Link>
      ))}
    </div>
  );
}
