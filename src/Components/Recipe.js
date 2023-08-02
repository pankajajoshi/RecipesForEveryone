import React from 'react';
import { FaUtensilSpoon } from "react-icons/fa";

import { AiOutlineCheckSquare } from 'react-icons/ai';

const Recipe = ({ recipeDetails }) => {
    console.log(recipeDetails);
    const meal = recipeDetails.meals;
    console.log(meal);
    let tags = meal?.tags?.split(',');
    console.log(meal);
    let instructions = meal?.instructions?.split('\r\n');
    instructions = instructions?.filter(instruction => instruction.length > 1);
    let ingredientsArr = [], measuresArr = [], singleMeal = {};
    if (meal && meal?.length > 0) {
        for (let props in meal[0]) {
            if (props.includes('strIngredient')) {
                if (meal[0][props]) ingredientsArr.push(meal[0][props]);
            }

            if (props.includes('strMeasure')) {
                if (meal[0][props]) {
                    if (meal[0][props].length > 1) {
                        measuresArr.push(meal[0][props]);
                    }
                }
            }
        }
    }
    singleMeal = {
        id: meal[0]?.idMeal,
        title: meal[0]?.strMeal,
        category: meal[0]?.strCategory,
        area: meal[0]?.strArea,
        thumbnail: meal[0]?.strMealThumb,
        instructions: meal[0]?.strInstructions,
        source: meal[0]?.strSource,
        tags: meal[0]?.strTags,
        youtube: meal[0]?.strYoutube,
        ingredients: ingredientsArr,
        measures: measuresArr
    }

    return (
       <></>
      )
}

export default Recipe