import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

export default function RecipesSearchResultsListItem({ recipe, ingredients }) {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const mealDate = new Date(queryParams.get('date'));
  const history = useHistory();

  const missingIngredients = recipe.ingredients.filter(
    (recipeIngredient) =>
      !ingredients.some(
        (ingredient) => ingredient.name === recipeIngredient.name
      )
  );

  const onAddMeal = async () => {
    const response = await fetch('/meals', {
      method: 'post',
      body: JSON.stringify({
        date: mealDate,
        recipeId: recipe.id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      history.push('/');
    }
  };

  return (
    <div className="search-list-item">
      <h3>{recipe.name}</h3>
      {missingIngredients.length === 0 ? (
        <p>You have all the required ingredients</p>
      ) : (
        <p>You're missing {missingIngredients.length} ingredients.</p>
      )}
      <button onClick={onAddMeal}>Add Meal</button>
    </div>
  );
}
