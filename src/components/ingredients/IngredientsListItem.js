import React from 'react';
import RemoveButton from '../buttons/RemoveButton';

export default function IngredientsListItem({ ingredient, onDelete }) {
  return (
    <div className="list-item">
      <h3>{ingredient.name}</h3>
      <p>
        {ingredient.amount} {ingredient.units}
      </p>
      <div className="right-action">
        <RemoveButton
          onClick={() => {
            onDelete(ingredient._id);
          }}
          title="Remove ingredient"
        />
      </div>
    </div>
  );
}
