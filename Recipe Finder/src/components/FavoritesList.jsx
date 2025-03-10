<div className="mt-8">
  <h2 className="text-2xl font-bold">Favorites</h2>
  <div className="flex flex-wrap mt-4">
    {favorites.map((recipe) => (
      <div key={recipe.id} className="w-1/3 p-2">
        <div className="border p-4 rounded-lg">
          <h3>{recipe.title}</h3>
          <button
            className="mt-4 p-2 bg-red-500 text-white rounded"
            onClick={() => onRemoveFavorite(recipe.id)}
          >
            Remove
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
