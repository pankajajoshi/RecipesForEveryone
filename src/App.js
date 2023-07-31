import logo from './logo.svg';
import React, { useEffect, useState } from "react";
 import './style.css';
 import{ MealInfo } from './Components/MealInfo';
import { Categories } from './Components/Categories';
//  <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,600;1,400&family=Fuzzy+Bubbles&family=Roboto+Slab:wght@900&family=Satisfy&display=swap" rel="stylesheet"></link>



function App() {

  const [search,setSearch] =useState('')
  const [mealInfoData,setMealInfoData]=useState()
  const[categoriesData,setCategoiesData]=useState()
  const getData=async() =>{
    const res=await fetch('https://www.themealdb.com/api/json/v1/1/categories.php?q=${search}')
    const resData = await res.json();
    setCategoiesData(resData)
  //   console.log(resData)
  }
			useEffect(()=>{
        getData()

      },[search])
      return (
		<>
        
        <div className="header">
          <h1>Recipes-for-Everyone</h1>
          <div className="search-box"> SEARCH
            <input type="search" placeholder='search meal....' onChange={(e)=>setSearch(e.target.valueAsNumber)}/>

          </div>
        </div>
        <div className="container">
          <div className="mealInfo">
            {mealInfoData && <MealInfo mealInfoData ={mealInfoData}/>}
          </div>
          <div className="meal-row">
            <h2 className="text-heading">Categories</h2>
            <div className="row">
              
              <Categories categorylist={categoriesData}
              setMealInfoData={setMealInfoData} />
            </div>

          </div>
        </div>
		</>
	);
}
export default App;