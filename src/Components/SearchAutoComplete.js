import { useState , useEffect} from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Link } from 'react-router-dom';

const SearchAutoComplete = ({ setResults }) => {
  const [input, setInput] = useState("");
  const[searchAutoComplete, setSearchAutoComplete] = useState();

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
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div class="searchResults">
      {
            searchAutoComplete ? (
                searchAutoComplete.map((mealItem,index)=>{
                    const {idMeal:id, strMeal: meal, strMealThumb: thumbnail, strCategory: category} = mealItem;
                    return (
                        <>
                        <Link to = {`/meal/${id}`} className = "link-img" key = {id} category={category}>
                         <div>{meal}</div>
                        </Link>
                        </>
                      )
                })
            ):"Not Found"
        }
      </div>
    </div>
  );
};
export default SearchAutoComplete;