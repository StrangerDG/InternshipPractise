export const fetchRecipes = async (ingredients) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          query: ingredients,
          apiKey: API_KEY,
          number: 10,
        },
      });
      return response.data.results;
    } catch (error) {
      console.error("Error fetching recipes:", error.response || error);
      alert("Failed to fetch recipes. Please check the API URL and your API key.");
    }
  };
  