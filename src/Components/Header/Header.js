import React from 'react';
import {FaSearch} from 'react-icons/fa';
// import "./Header.scss";
// import Navbar from "./Navbar";
// import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className='header'>
      
      <div className='header-content flex align-center justify-center flex-column text-center'>
        
        <h1>Recipes for Everyone ...</h1>
        <h4 className='tagline'>Search ..Prepare ..& Enjoy !!! </h4>
         </div> 
         
            <div className='input-wrap'>
                <div className="labeltextbox">
                    <label> Search </label>
                </div>
                <FaSearch className="search-icon" /> 
                <input type="search" placeholder='search here....' />
            
            </div>
      
    </header>
  )
}

export default Header