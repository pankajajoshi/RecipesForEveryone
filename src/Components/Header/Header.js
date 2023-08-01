import React from 'react';
import {FaSearch} from "react-icons/fa";
// import "./Header.scss";
// import Navbar from "./Navbar";
// import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className='header'>
      
      <div className='header-content flex align-center justify-center flex-column text-center'>
        
        <h1 className='text-white header-title ls-2'>Recipes for Everyone ...</h1>
        <h4 className='tagline'>personalize your experience here </h4>
         </div> 
          
            <div className='input-wrap'>
            <label for="search">Search</label>
            <br />
            <FaSearch className="search-icon" />
            <input type="search" placeholder='search here....' />
            </div>
      
    </header>
  )
}

export default Header