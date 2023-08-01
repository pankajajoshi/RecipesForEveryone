import axios from "axios"

export const fetchCategories = async() => {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    console.log('fetching categories');
    return response && response.categories;
}