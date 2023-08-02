import React, { useState, useEffect } from "react";
import axios from "axios";
import Recipe from '../Components/Recipe';
import { useParams } from 'react-router-dom';

const RecipePage = () => {
    const {id} = useParams();
    const [isLoading, setLoading] = useState(true);
    const[recipe, setRecipe] = useState();
  useEffect(() => {
     console.log('Recipe page: in useEffect selected meal: ', id);
     axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id).then((response) => {
      console.log('recipe: ', response.data);
      setRecipe(response.data);
      setLoading(false);
     });
  }, []);

    if(!isLoading) {
        return (
        
            <div className='catpage-wrap'>
                <div className='catpage-title'>Recipe </div>
                <main className='main-content'>
                    <Recipe recipeDetails={recipe}/>
                </main>
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