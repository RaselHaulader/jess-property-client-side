import React from 'react';
import '../../DashBoardStyle.css';

const AllPostItem = ({ item }) => {
    const {title, price } = item
    return (
        <div className='container boxShadow'>
            <div className='row'>
                <h6 className='col-4'>{title} apartment</h6>
                <h6 className='col-4 text-center'>$ {price} for sell</h6>
                <div className='col-4 justify-content-evenly d-flex'>
                <i className="far fa-eye"></i>
                <i className="far fa-check-circle"></i>
                <i className="far fa-trash-alt"></i>
                </div>
            </div>
        </div>
    );
};

export default AllPostItem;