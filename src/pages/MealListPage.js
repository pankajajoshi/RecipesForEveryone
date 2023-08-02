import React, { useState, useEffect } from "react";
import axios from "axios";
import MealList from '../Components/MealList';
import { useParams } from 'react-router-dom';
import { FaUtensilSpoon } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiChevronsRight } from "react-icons/bi";
import { AiOutlineCheckSquare } from 'react-icons/ai';


const MealListPage = () => {
    const {name} = useParams();
    const [isLoading, setLoading] = useState(true);
    const[mealListByCategory, setMealListByCategory] = useState();
  useEffect(() => {
     console.log('MealList: in useEffect selected category: ', name);
     axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c='+name).then((response) => {
      console.log('meal list: ', response.data);
      setMealListByCategory(response.data);
      setLoading(false);
     });
  }, []);

    if(!isLoading) {
        return (
        
            <div className='catpage-wrap'>
                
                <div id='categoryTitle' className='catpage-title breadcrumb text-white'>
             
                <Link to = "/" className='flex align-center'>
                    <AiFillHome size = {40} />
                  </Link> &nbsp;
                       
                    Meals for {name}   
                
                </div>
                <main className='main-content'>
                    <MealList mealList={mealListByCategory}/>
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


export default MealListPage