import { useState , useEffect} from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Link } from 'react-router-dom';

const SearchAutoComplete = ({ setResults }) => {
  const [input, setInput] = useState("");
  const[searchAutoComplete, setSearchAutoComplete] = useState();
  const [isLoading, setLoading] = useState(true);

//   useEffect(() => {
//     console.log('input ', input);
//     axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s='+input).then((response) => {
//      console.log('meal list: ', response.data);
//      setSearchAutoComplete(response.data);
   
//     });
//  }, []);

  const setData = (input) => {
    console.log('input ', input);
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s='+input).then((response) => {
     console.log('meal list: ', response.data);
     setSearchAutoComplete(response.data.meals);
     setLoading(false);
  });
  };

  const handleChange = (value) => {
    console.log("value",value, '  len: ', value.length);
    setInput(value);
    if(value && value.length >= 3){
        setData(value);
    }
    
  };


  return (
    <>

    <div className="labeltextbox">
        <label>Search</label>
        </div>
     <div>
     <form action="/form/submit" method="GET">
      <FaSearch id="search-icon" />
      
      <input type="search"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      {/* <input type="submit" name="Submit" className="submit" value="submit" /> */}
      </form>
      <div className="searchResults">
      {
            searchAutoComplete ? (
                searchAutoComplete.map((mealItem,index)=>{
                    const {idMeal:id, strMeal: meal, strMealThumb: thumbnail, strCategory: category} = mealItem;
                    if(!isLoading){
                    return (
                        <>
                      
                        <Link to = {`/meal/${id}`} className = "link-img" category={category}>
                         <div className="searchbar-meal">{meal}</div>
                        </Link>
                        </>
                      )
                    }else{
                        return(
                            <div className="overlay">
                                            Loading...
                                        </div>
                        );
                        }
                })
            ):""
        }
      </div>
    </div>
 </>
  );

};
export default SearchAutoComplete;

