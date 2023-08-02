import React from 'react';
import { FaUtensilSpoon } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiChevronsRight } from "react-icons/bi";
import { AiOutlineCheckSquare } from 'react-icons/ai';

const Recipe = ({recipeDetails}) => {
    console.log(recipeDetails);
    const meal = recipeDetails.meals;
    console.log(meal);
    let tags = meal?.tags?.split(',');
    console.log(meal);
    let instructions = meal?.instructions?.split('\r\n');
    instructions = instructions?.filter(instruction => instruction.length > 1);
    let ingredientsArr = [], measuresArr = [], singleMeal = {};
    if(meal && meal?.length > 0){
        for(let props in meal[0]){
            if(props.includes('strIngredient')){
              if(meal[0][props]) ingredientsArr.push(meal[0][props]);
            }
      
            if(props.includes('strMeasure')){
              if(meal[0][props]){
                if(meal[0][props].length > 1){
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
        <div className='section-wrapper'>
          <div className='container'>
            <div className='breadcrumb bg-orange text-white'>
              <ul className='flex align-center my-2'>
                <li className='breadcrumb-item'>
                  <Link to = "/" className='flex align-center'>
                    <AiFillHome size = {22} />
                  </Link>
                </li>
                <li className='flex align-center mx-1'>
                  <BiChevronsRight size = {23} />
                </li>
                <li className='breadcrumb-item flex'>
                  <span to = "" className='fs-15 fw-5 text-uppercase'>{singleMeal?.title}</span>
                </li>
              </ul>
            </div>
    
            <div className='sc-title'>singleMeal Details</div>
            <section className='sc-details bg-white'>
              <div className='details-head grid'>
                <div className='details-img'>
                  <img src = {singleMeal?.thumbnail} alt = "" className='img-cover' />
                </div>
    
                <div className='details-intro'>
                  <h3 className='title text-orange'>{singleMeal?.title}</h3>
                  <div className='py-4'>
                    <div className='category flex align-center'>
                      <span className='text-uppercase fw-8 ls-1 my-1'>category: &nbsp;</span>
                      <span className='text-uppercase ls-2'>{ singleMeal?.category }</span>
                    </div>
    
                    <div className='source flex align-center'>
                      <span className='fw-7'>Source: &nbsp;</span>
                      <a href = {singleMeal.source}>
                        {singleMeal.source ? (singleMeal?.source).substring(0, 40) + "..." : "Not found" }
                      </a>
                    </div>
                  </div>
    
                  <div className='tags flex align-start flex-wrap'>
                    <h6 className='fs-16'>Tags:</h6>
                    <ul className='flex align-center flex-wrap'>
                      {
                        tags?.map((tag, idx) => (<li key = {idx} className = "fs-14">{tag}</li>))
                      }
                    </ul>
                  </div>
    
                  <div className='ingredients my-5 px-3 py-3'>
                    <h6 className='fs-16 text-white'>Ingredients</h6>
                    <ul className='grid'>
                      {
                        singleMeal?.ingredients?.map((ingredient, idx) => (
                          <li key = {idx} className = "flex align-center">
                            <span className='li-dot'>{idx + 1}</span>
                            <span className='text-capitalize text-white fs-15'>{ingredient}</span>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
    
              <div className='details-body'>
                <div className='measures my-4'>
                  <h6 className='fs-16'>Measure:</h6>
                  <ul className='grid'>
                    {
                      singleMeal?.measures?.map((measure, idx) => (
                        <li key = {idx} className = "fs-14 flex align-end">
                          <span className='li-icon fs-12 text-orange'>
                            <FaUtensilSpoon />
                          </span>
                          <span className='li-text fs-15 fw-6 op-09'>{measure}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
    
                <div className='instructions my-4'>
                  <h6 className='fs-16'>Instructions:</h6>
                  <ul className='grid'>
                    {
                      instructions?.map((instruction, idx) => (
                        <li key = {idx} className = "fs-14">
                          <AiOutlineCheckSquare size = {18} className = "text-orange li-icon" />
                          <span className='li-text fs-16 fw-5 op-09'>{instruction}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      )
}

export default Recipe