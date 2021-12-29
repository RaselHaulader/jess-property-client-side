import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ name, icon }) => {
    return (
        <Link to='/allProperty' className='text-secondary text-decoration-none'>
            <div>
                <div className="catagory-item">
                    <i className={icon}></i>
                    <h4>{name}</h4>
                </div>
            </div>
        </Link>
    );
};

export default CategoryItem;