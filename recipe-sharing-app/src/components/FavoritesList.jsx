import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites
      .map((id) => state.recipes.find((recipe) => recipe.id === id))
      .filter(Boolean)
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favorites.map((recipe) => (
            <li key={recipe.id}>
              <strong>{recipe.title}</strong> - {recipe.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
