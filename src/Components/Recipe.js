import React from 'react';
import { FaUtensilSpoon } from "react-icons/fa";
import ReactPlayer from 'react-player/youtube'
import { AiOutlineCheckSquare } from 'react-icons/ai';

const Recipe = ({ recipeDetails }) => {
    console.log(recipeDetails);
    const meal = recipeDetails.meals;
    console.log(meal);
    let tags = meal?.tags?.split(',');
    console.log(meal);
    let instructions = meal?.instructions?.split('\r\n');
    instructions = instructions?.filter(instruction => instruction.length > 1);
    console.log("instructions: ",instructions);
    let ingredientsArr = [], measuresArr = [], ingredientImagesArr=[], singleMeal = {};
    if (meal && meal?.length > 0) {
        for (let props in meal[0]) {
            if (props.includes('strIngredient')) {
                if (meal[0][props]) {
                    var ingredSmall = encodeURIComponent(meal[0][props]+"-Small.png");
                    var imgSrc = "https://www.themealdb.com/images/ingredients/"+ingredSmall;
                    ingredientsArr.push(meal[0][props]);
                    ingredientImagesArr.push(imgSrc);
                }
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
        ingredientImages: ingredientImagesArr,
        measures: measuresArr
    }

    return (
        <>
 
     <div className='section-wrapper'>
            <div className='recipe-container'>
        
            <div className='details-head grid'>
                            <h3 className='text-orange ingredients-header'>{singleMeal?.title}</h3>
                          </div>
                            <div className='details-img'>
                                <img src={singleMeal?.thumbnail} alt="" className='img-cover' />
                            </div>
                            <div className='instructions'>
                                <h6 className='fs-16'>Instructions:</h6>
                                <ul className='grid'>
                                    {
                                        [singleMeal?.instructions]?.map((instruction, idx) => (
                                            <li key={idx} className="fs-14">
                                                <AiOutlineCheckSquare size={18} className="text-orange li-icon" />
                                                <span className='li-text'>{instruction}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div class='followAlong_video'>
                                    <h6 className='fs-16'>Follow Along:</h6>
                                    <ReactPlayer url={singleMeal?.youtube} />

                                </div>
                            </div>
                        <div className='details-head grid'>
                           &nbsp;
                          </div>
                                
                                   

                                <section className='section_ingredients'>
                                    <div class="ingredients_header">
                                        <h2 class="text-orange">Ingredients</h2>
                                    </div>
                                    <ul class="ingredients__list">
                                    {
                                            singleMeal?.ingredients?.map((ingredient, idx) => (
                                                <div class="list-wrapper">
                                                   
                                                <li key={idx} className="ingredient ">
                                                    <div className="ingredientImg">
                                                        <img src={ingredientImagesArr[idx]} alt={ingredient} class="ingredientImg"/>
                                                    </div>
                                                    <div class="ingredient_text-wrapper">
                                                        <p class="ingredient__name">{ingredient}</p>
                                                        <p class="ingredient__amount">{measuresArr[idx]}</p>
                                                    </div>
                                                    {/* <span className='text-capitalize text-white fs-15'>{ingredient}</span> */}
                                                </li>
                                                </div>
                                            ))
                                        }
                                    </ul>
                                </section>

                </div>
         </div>
         </>
      )
}

export default Recipe