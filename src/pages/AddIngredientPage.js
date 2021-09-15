import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ingredientUnits } from '../constants/ingredientUnits';

export default function AddIngredientPage() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [units, setUnits] = useState(ingredientUnits[0]);

  const history = useHistory();

  const onAddIngredient = async () => {
    const newIngredient = {
      name: name.toLowerCase(),
      amount,
      units,
    };

    const response = await fetch('/ingredients', {
      method: 'post',
      body: JSON.stringify(newIngredient),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      history.push('/');
    }
  };

  return (
    <div className="page">
      <button
        className="back-button"
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </button>
      <div className="centered-container">
        <h1>Add Ingredient</h1>
        <input
          type="text"
          placeholder="Enter ingredient name"
          className="space-after space-before full-width"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Enter ingredient name"
          className="space-before full-width"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <select
          value={units}
          onChange={(e) => {
            setUnits(e.target.value);
          }}
          className="space-before full-width"
        >
          {ingredientUnits.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
        <button className="space-before full-width" onClick={onAddIngredient}>
          Add
        </button>
      </div>
    </div>
  );
}
