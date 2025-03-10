const RecipeList = ({ recipes, onAddToFavorites }) => {
    console.log("Rendering Recipes:", recipes); // Log the recipes prop
  
    return (
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes && recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onAddToFavorites={onAddToFavorites}
            />
          ))
        ) : (
          <p>No recipes found. Try different ingredients.</p>
        )}
      </div>
    );
  };
  