import React from 'react';

import Categories from '../Components/Categories';

const CategoryPage = ({categorList}) => {
    console.log('in categories: ', categorList);
    return(
        <div className='catpage-wrap'>
            <div className='catpage-title'>Categories</div>
        <main className='main-content'>
            <Categories categorList={categorList}/>
        </main>
        </div>
    )
}
export default CategoryPage;