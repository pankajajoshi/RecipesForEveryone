import './App.css';
import './style.css';
// react router dom
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import axios from "axios";
import CategoryPage from "./pages/CategoryPage";
import MealListPage from "./pages/MealListPage"
import RecipePage from "./pages/RecipePage"
import React, { useEffect, useState } from "react";
import Header from './Components/Header/Header';



function App() {
  const [isLoading, setLoading] = useState(true);
  const[categories, setCategories] = useState();
  useEffect(() => {
    console.log('in useEffect');
     axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((response) => {
      //console.log(response.data);
      setCategories(response.data);
      setLoading(false);
     });
  }, []);
  // scroll
  const [scroller, initScroller] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  });
  const handleScroll = (event) => {
    var header = document.getElementsByTagName("header")[0];
    var categoryTitle = document.getElementById('categoryTitle');
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      header.style="display: none";
      header.height="0px";
      categoryTitle.classList.add('sticky');
    } else {
      header.style="display: flex";
      header.height="20%";
      categoryTitle.classList.remove('sticky');
    }
  };
  //
  if(!isLoading) {
    return (
     <div id="mainDiv" onScroll={handleScroll}>
      <BrowserRouter>
         <Header />
         
        <Routes>
          <Route path = "/" element = {<CategoryPage categorList={categories}/>} />
          <Route path = "/meal/category/:name" element = {<MealListPage  />} /> 
          <Route path = "/meal/:id" element = {<RecipePage />} />
        </Routes>
        
      </BrowserRouter>
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

export default App;