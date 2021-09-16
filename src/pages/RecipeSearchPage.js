import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useHistory, useLocation } from 'react-router-dom';
import RecipesSearchResultsList from '../components/recipes/RecipesSearchResultsList';

export default function RecipeSearchPage() {
  const [recipeSearchInput, setRecipeSearchInput] = useState('');
  const [recipeSearchUrl, setRecipeSearchUrl] = useState('/recipes');

  const history = useHistory();

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const mealDate = new Date(queryParams.get('date'));

  const { isLoading: isLoadingRecipes, data: recipes } =
    useFetch(recipeSearchUrl);

  const { data: ingredients } = useFetch('/ingredients');

  const onRecipeSearch = () => {
    const queryParams = new URLSearchParams();
    queryParams.append('search', recipeSearchInput);

    setRecipeSearchUrl(`/recipes?${queryParams.toString()}`);
  };

  return (
    <div className="page">
      <button onClick={() => history.goBack()} className="back-button">
        Back
      </button>
      <div className="centered-container">
        <h1>Plan Meal for {mealDate.toLocaleDateString()}</h1>
        <input
          type="text"
          className="full-width space-before space-after"
          placeholder="Enter recipe keyword"
          value={recipeSearchInput}
          onChange={(e) => setRecipeSearchInput(e.target.value)}
        />
        <button className="full-width space-after" onClick={onRecipeSearch}>
          Search Recipes
        </button>
        <RecipesSearchResultsList
          recipes={recipes}
          ingredients={ingredients}
          isLoading={isLoadingRecipes}
        />
      </div>
    </div>
  );
}
