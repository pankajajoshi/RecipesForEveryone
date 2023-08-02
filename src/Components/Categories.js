import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Categories = ({categorList}) => {
    console.log('in component categories: ', categorList);
    const categories = categorList.categories;
    return(
        <>
        <div className="container">
        {
            categories ? (
                categories.map((category,index)=>{
                    const { idCategory: id, strCategory: title, strCategoryThumb: thumbnail} = category;
                    return(
                        <Link to = {`/meal/category/${title}`} className = "category-itm" key = {id}>
                            <div className='cat-img'>
                            <img src = {thumbnail} alt = {title} />
                            <div className='category-itm'>
                                <h3 className='cat-title'>{title}</h3>
                            </div>
                            </div>
                        </Link>
                    )
                })
            ):"Not Found"
        }
       </div>
        </>
    )
} 
export default Categories
/*
export const Categories =({categories,setMealInfoData}) => {
    const[mealsForSelectedCategory, setMealsForSelectedCategory] = useState()
    const[selectedCategory, setSelectedCategory] = useState()
    useEffect(()=>
    {
        console.log('in useEffect')
       // getData(selectedCategory);
    },[])

    const clickCategory = (evt, strCategory) => {
        console.log('on click', strCategory);
        setSelectedCategory(strCategory);
        //getData();
    };
   
    const getData= async() => {
        console.log('in get data ',{selectedCategory});
       const res=await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+{selectedCategory})
        const resData = await res.json();
        console.log(resData);
        setMealsForSelectedCategory(resData);
        setMealInfoData(resData);
      }


	return(
        <>
        {
            categorylist ? (
                categorylist.categories.map((Categories,index)=>{
                    return(
                        <div className="card" key={index} onClick={e => clickCategory(e,Categories.strCategory, index)}>
                            <img src={Categories.strCategoryThumb}
                                alt={Categories.strCategory} />
                            <div className="meal-info"></div>
                            <h4>{Categories.strCategory}</h4>
                         
                        </div>
                        

                    )

                })
            ):"Not Found"

        
        }
       
        </>
    )
}
*/