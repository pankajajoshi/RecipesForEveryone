import React, { useState, useEffect } from "react";
import axios from "axios";
import Recipe from '../Components/Recipe';
import { useParams } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";


const RecipePage = () => {
    const {id} = useParams();
    const [isLoading, setLoading] = useState(true);
    const[recipe, setRecipe] = useState();
    const[category, setCategory] = useState('');
    const[linkToCategory, setLinkToCategory] = useState();
  useEffect(() => {
     axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id).then((response) => {
      //console.log('recipe: ', response.data);
      setCategory(response.data.meals[0].strCategory);
      setRecipe(response.data);
      setLinkToCategory('/meal/category/'+response.data.meals[0].strCategory)
      setLoading(false);
     });
  }, [category]);

    if(!isLoading) {
        return (
        
            <div className='catpage-wrap'>
                {/* <MealListPage /> */}
                 <div className='end-recipe-modal' >
                <div className='catpage-title end-recipe-modal-title'>
                    <Link to = "/" className='flex align-center'>
                        <AiFillHome size = {40} />
                    </Link> &nbsp;&nbsp;&nbsp;
                    <Link to={linkToCategory}>All {category} category</Link>
                    &nbsp;&nbsp;&nbsp;
                    Recipe
                  </div>
                <main className='main-content'>
                    <Recipe recipeDetails={recipe}/>
                </main>
                </div>
            </div>
        );
    } else{
    return(
        <div className="overlay">
                        Loading...
                    </div>
    );
    }
}


export default RecipePage