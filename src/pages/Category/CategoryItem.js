import React from 'react';

const CategoryItem = ({name,icon}) => {
    return (
        <div>
            <div className="catagory-item">
                <i className={icon}></i>
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default CategoryItem;