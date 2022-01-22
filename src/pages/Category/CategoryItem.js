import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addFilterValue } from '../../redux/slices/propertySlice';

const CategoryItem = ({ name, icon }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleCategory = (category) => {
        dispatch(addFilterValue({ PropertyType: category }))
        navigate('/allProperty')
    }
    return (
        <div onClick={()=>handleCategory(name)} className='text-secondary text-decoration-none'>
            <div>
                <div className="catagory-item">
                    <i className={icon}></i>
                    <h4>{name}</h4>
                </div>
            </div>
        </div>
    );
};

export default CategoryItem;