import React, { useState } from "react";
import { fetchRecipes } from "./api";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import FavoritesList from "./components/FavoritesList";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (ingredients) => {
    setLoading(true);
    const fetchedRecipes = await fetchRecipes(ingredients);
    setRecipes(fetchedRecipes);
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl text-center font-bold mb-8">Recipe Finder</h1>

      <SearchBar onSearch={handleSearch} />

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <RecipeList recipes={recipes} onAddToFavorites={(recipe) => setFavorites([...favorites, recipe])} />
      )}

      <FavoritesList
        favorites={favorites}
        onRemoveFavorite={(id) => setFavorites(favorites.filter((recipe) => recipe.id !== id))}
      />
    </div>
  );
};

export default App;
