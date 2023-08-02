import { Link } from 'react-router-dom';

import { useState } from 'react';

const MealList = ({mealList}) => {
    console.log('in component mealList: ', mealList);
    const[show,setShow]=useState(false);
    const[item,setItem]=useState();
    const meals = mealList.meals;
    return(
        <>
        <div className="container">
        {
            meals ? (
                meals.map((mealItem,index)=>{
                    const {idMeal:id, strMeal: meal, strMealThumb: thumbnail } = mealItem;
                    return (
                        <>
                        <Link to = {`/meal/${id}`} className = "link-img" key = {id} >
                          <div className="meal-img">
                            <img src = {thumbnail} alt = {meal} />
                          </div>
        
                          <div className="meal-body">
                            <div className="meal-body-info">
                              <div>{meal}</div>
                            </div>
                          </div>
                        </Link>
                       
                        </>
                      )
                })
            ):"Not Found"
        }
       </div>
        </>
    )
}
export default MealList