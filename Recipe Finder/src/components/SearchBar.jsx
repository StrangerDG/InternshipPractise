<div className="flex justify-center mt-8">
  <input
    type="text"
    className="border p-2 rounded"
    placeholder="Enter ingredients"
    value={ingredient}
    onChange={(e) => setIngredient(e.target.value)}
  />
  <button
    className="ml-4 p-2 bg-blue-500 text-white rounded"
    onClick={handleSearch}
  >
    Search
  </button>
</div>
