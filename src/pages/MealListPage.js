import React, { useState, useEffect } from "react";
import axios from "axios";
import MealList from '../Components/MealList';
import { useParams } from 'react-router-dom';

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
                <div className='catpage-title'>Meals for {name}</div>
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