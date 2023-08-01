import React, { useState, useEffect } from "react";
import axios from "axios";


export const MealInfo =(props, mealInfoDataList, setMealInfoData) => {
    console.log('in MealInfo module',mealInfoDataList);
    
          return(
            <>
            {
                mealInfoDataList ? (
                    mealInfoDataList.meals.map((Meals,index)=>{
                        return(
                            <div className="card" key={index}>
                                <img src={Meals.strMealThumb}
                                    alt={Meals.strMeal} />
                                <div className="meal-info"></div>
                                <h4>{Meals.strMeal}</h4>
                            </div>
    
                        )
    
                    })
                ):"Not Found"
            }
           
            </>
        );
    

    //object restucturing 
    const {idCategory,strCategory,strCategoryDescription,strCategoryThumb}=props.MealInfo
	return(
        <>
       <div className="meal-content">
        <h3>{strCategory}</h3> <br/>
        <img src={props.MealInfo.strCategoryThumb} alt="" />
       </div>
        </>
    )
}
