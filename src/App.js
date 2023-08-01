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
  
  if(!isLoading) {
    return (
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path = "/" element = {<CategoryPage categorList={categories}/>} />
          {/* <Route path = "/meal/category/:name" element = {<Category />} /> */}
        </Routes>
      </BrowserRouter>
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