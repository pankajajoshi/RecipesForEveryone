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
export default Categories;
