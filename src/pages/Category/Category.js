import React from 'react';
import CategoryItem from './CategoryItem';

const Category = () => {
    return (
        <div className='container mt-5'>
            <div className='catagory-body'>
                <CategoryItem name="Home" icon="fas fa-home" />
                <CategoryItem name="Apartment" icon="far fa-building" />
                <CategoryItem name="Lands" icon="fab fa-accusoft" />
                <CategoryItem name="Home" icon="fas fa-home" />
                <CategoryItem name="Home" icon="fas fa-home" />
                <CategoryItem name="Home" icon="fas fa-home" />
            </div>
        </div>
    );
};

export default Category;