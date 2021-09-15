import React from 'react';
import { useFetch } from '../hooks/useFetch';
import MealsList from '../components/meals/MealsList';
import IngredientsList from '../components/ingredients/IngredientsList';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const {
    isLoading: isLoadingMeals,
    data: meals,
    setData: setMeals,
  } = useFetch('/meals');

  const {
    isLoading: isLoadingIngredients,
    data: ingredients,
    setData: setIngredients,
  } = useFetch('/ingredients');

  const onDeleteMeal = async (mealId) => {
    const response = await fetch(`/meals/${mealId}`, { method: 'delete' });

    if (response.ok) {
      setMeals(meals.filter((meal) => meal._id !== mealId));
    }
  };

  const onDeleteIngredient = async (ingredientId) => {
    const response = await fetch(`/ingredients/${ingredientId}`, {
      method: 'delete',
    });

    if (response.ok) {
      setIngredients(
        ingredients.filter((ingredient) => ingredient._id !== ingredientId)
      );
    }
  };

  return (
    <div className="page-container">
      <div className="column">
        <MealsList
          meals={meals}
          isLoading={isLoadingMeals}
          onDelete={onDeleteMeal}
        />
      </div>
      <div className="column">
        <IngredientsList
          ingredients={ingredients}
          isLoading={isLoadingIngredients}
          onDelete={onDeleteIngredient}
        />
        <Link to="/shopping-list">
          <button className="shopping-list-button list-container full-width">
            Generate Shopping List
          </button>
        </Link>
      </div>
    </div>
  );
}
