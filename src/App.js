import './App.css';
// react router dom
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import axios from "axios";
import Categories from "./Components/Categories";
import React, { useEffect, useState } from "react";

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
    console.log('is loading is true');
    return (
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Categories categorList={categories}/>} />
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