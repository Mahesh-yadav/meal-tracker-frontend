import React from 'react';
import { Link } from 'react-router-dom';
import RemoveButton from '../buttons/RemoveButton';

export default function MealsListItem({ meal, date, onDelete }) {
  return (
    <div className="list-item">
      {meal ? (
        <>
          <h4>{date.toLocaleDateString()}</h4>
          <p>{meal.recipe.name}</p>
          <div className="right-action">
            <RemoveButton
              onClick={() => {
                onDelete(meal._id);
              }}
              title="Remove meal"
            />
          </div>
        </>
      ) : (
        <>
          <h4>{date.toLocaleDateString()}</h4>
          <p>No meal planned</p>
          <div className="right-action">
            <Link to={`/recipe-search?date=${date.toString()}`}>
              <button>Add</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
