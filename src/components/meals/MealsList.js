import React from 'react';
import MealsListItem from './MealsListItem';
import { next7days, isDatesSame } from '../../helpers/date';

export default function MealsList({ meals, isLoading }) {
  return (
    <div className="list-container">
      <h1>Planned Meals</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        next7days.map((date, index) => {
          const mealForDay = meals.find((meal) =>
            isDatesSame(new Date(meal.planned_date), date)
          );

          return <MealsListItem key={index} meal={mealForDay} date={date} />;
        })
      )}
    </div>
  );
}
