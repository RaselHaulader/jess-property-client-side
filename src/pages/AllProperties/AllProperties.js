import React from 'react';
import AllPropertyItem from './AllPropertyItem';
import img from '../../images/bannerbg.png'

const AllProperties = () => {
    return (
        <div className='container my-5 pb-5'>
            <div className='d-flex justify-content-between mb-3 mt-5'>
                <h3 className='fw-bolder text-uppercase'>All Properties</h3>
                <p className='text-danger fw-bold'>Views all <i className="fas fa-long-arrow-alt-right"></i></p>
            </div>
            <div className='properties-container '>
                <AllPropertyItem img={img} />
                <AllPropertyItem img={img} />
                <AllPropertyItem img={img} />
                <AllPropertyItem img={img} />
            </div>
        </div>
    );
};

export default AllProperties;