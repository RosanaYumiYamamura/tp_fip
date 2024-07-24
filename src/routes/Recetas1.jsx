import React, { useState } from 'react';
import './Recetas1.css';
import { recipes } from './data';

function Recetas1() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.ingredients.some(ingredient =>
      ingredient.toLowerCase().includes(searchTerm.toLowerCase())
    ) ||
    recipe.preparation.some(step =>
      step.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="Recetas1">
      <header className="Recetas1-header">
        <input
          type="text"
          placeholder="Buscar recetas..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </header>
      <div className="results">
        {filteredRecipes.map((recipe, index) => (
          <div key={index} className="result-item">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <div className="recipe-details">
              <h2>{recipe.title}</h2>
              <h3>Ingredientes:</h3>
              <ul>
                {recipe.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
              <h3>Preparación:</h3>
              <ol>
                {recipe.preparation.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recetas1;
