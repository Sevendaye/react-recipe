import React from 'react';
import style from './recipe.module.css';

const Recipe = (props) => {
    return (
        <div className={style.recipe}>
            <h1>{props.title}</h1>
            <h3>Ingrédients</h3>
            <ol>
                {props.ingredients.map(ingredient => (
                    <li className={style.recipeLi}>{ingredient.text}</li>
                ))}
            </ol>
            <p>{Math.round(props.calories)} calories</p>
            <img className={style.image} src={props.image} alt="" />
        </div>
    );
};

export default Recipe;

