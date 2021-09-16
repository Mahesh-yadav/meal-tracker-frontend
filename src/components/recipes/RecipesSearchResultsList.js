import React from 'react';
import RecipesSearchResultsListItem from './RecipesSearchResultsListItem';

export default function RecipesSearchResultsList({
  isLoading,
  recipes,
  ingredients,
}) {
  return (
    <>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          {recipes.map((recipe) => (
            <RecipesSearchResultsListItem
              key={recipe.id}
              recipe={recipe}
              ingredients={ingredients}
            />
          ))}
        </>
      )}
    </>
  );
}
