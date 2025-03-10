import RecipeCard from "./RecipeCard";

{recipes.length === 0 ? (
    <p className="text-center text-xl">No recipes found. Please try again!</p>
  ) : (
    recipes.map((recipe) => (
      <RecipeCard
        key={recipe.id}
        recipe={recipe}
        onAddToFavorites={onAddToFavorites}
      />
    ))
  )}
  
export default RecipeList;
