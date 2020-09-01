import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';


const App = () => {
  const APP_ID = '119662fa';
  const APP_KEYS = '9f0d92e3a69c126766ded0b63e7fc56e';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}`);
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" placeholder="Tapez le nom d'un aliment/recette" value={search} onChange={updateSearch} />
        <button type="submit" className="search-button">Chercher</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} />
        )
        )}
      </div>
    </div>
  );
};

export default App;
