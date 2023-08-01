import React from 'react';

import Categories from '../Components/Categories';

const CategoryPage = ({categorList}) => {
    console.log('in categories: ', categorList);
    return(
        <main className='main-content'>
            <Categories categorList={categorList}/>
        </main>
    )
}
export default CategoryPage;