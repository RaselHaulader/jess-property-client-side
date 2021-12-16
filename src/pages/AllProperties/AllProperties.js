import React from 'react';
import AllPropertyItem from './AllPropertyItem';
import img from '../../images/bannerbg.png'

const AllProperties = () => {
    return (
        <div className='container'>
            <div>
                <h3>All Properties</h3>
            </div>
            <div className='properties-container'>
                <AllPropertyItem img={img} />
                <AllPropertyItem img={img} />
                <AllPropertyItem img={img} />
                <AllPropertyItem img={img} />
            </div>
        </div>
    );
};

export default AllProperties;