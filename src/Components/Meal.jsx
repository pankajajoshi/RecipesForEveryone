import React, { useState, useEffect } from "react";
import axios from "axios";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

function Meal() {
	return(
        <>
        <div className ="main">
            <div className="heading">
                <h1>Search Recipes </h1>
            
            </div>
            <div className="searchBox">
                <input type="search" className="=search-bar" />
                <button type="submit"><i class="fa fa-search"></i></button>
            </div>
        </div>
        
        </>
    )
}

export default Meal;