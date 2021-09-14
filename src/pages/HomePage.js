import React from 'react';
import { useFetch } from '../hooks/useFetch';
import MealsList from '../components/meals/MealsList';

export default function HomePage() {
  const {
    isLoading: isLoadingMeals,
    data: meals,
    setData: setMeals,
  } = useFetch('/meals');

  return (
    <div className="page-container">
      <div className="column">
        <MealsList meals={meals} isLoading={isLoadingMeals} />
      </div>
    </div>
  );
}
