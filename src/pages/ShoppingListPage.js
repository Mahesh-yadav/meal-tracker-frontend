import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export default function ShoppingListPage() {
  const history = useHistory();

  const { isLoading, data: shoppingItems } = useFetch('/shopping-items');

  return (
    <div className="page">
      <button onClick={() => history.goBack()} className="back-button">
        Back
      </button>
      <div className="centered-container">
        <h1>Here's your shopping list:</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {shoppingItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
