import { Link } from 'react-router-dom';

const MealList = ({mealList}) => {
    console.log('in component mealList: ', mealList);
    const meals = mealList.meals;
    return(
        <>
        <div className="container">
        {
            meals ? (
                meals.map((mealItem,index)=>{
                    const {idMeal:id, strMeal: meal, strMealThumb: thumbnail } = mealItem;
                    return (
                        <Link to = {`/meal/${id}`} className = "meal-itm align-center justify-center" key = {id}>
                          <div className='meal-itm-img'>
                            <img src = {thumbnail} alt = {meal} />
                          </div>
        
                          <div className='meal-itm-body'>
                            <div className='meal-itm-body-info flex flex-column'>
                              <div className='meal fw-15 fw-7 op-09'>{meal}</div>
                            </div>
                          </div>
                        </Link>
                      )
                })
            ):"Not Found"
        }
       </div>
        </>
    )
}
export default MealList