import React, { Component } from 'react';
import Recipe from './Recipe';
import NavBar from './navBar';
import './RecipeApp.css';
import RecipeList from './RecipeList';

class RecipeApp extends Component {
  render() {
    return (

      <div className="App">
        <NavBar title="Recipe" list= {["New Recipe", "Home", "About", "Contact Us"]}/>
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
