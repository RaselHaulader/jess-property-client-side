import React from 'react';
import CategoryItem from './CategoryItem';

const Category = () => {
   
    return (
        <div className='container py-3 my-5'>
            <div  className='catagory-body'>
                <CategoryItem name="Home" icon="fas fa-home" />
                <CategoryItem name="Apartment" icon="far fa-building" />
                <CategoryItem name="Lands" icon="fab fa-accusoft" />
                <CategoryItem name="Office" icon="fas fa-home" />
                <CategoryItem name="Shop" icon="fas fa-home" />
                <CategoryItem name="Commercial" icon="fas fa-home" />
            </div>
        </div>
    );
};

export default Category;