import React from 'react';
import AddPropertyItem from './AddPropertyItem';
import buyImg from '../../images/buy.svg';
import sellImg from '../../images/sell.svg';
import rentImg from '../../images/rent.svg';
import './AddPropertyStyle.css';

const AddPropertySection = () => {
    return (
        <div className='container my-5 py-5 '>
            <h3 className='fw-bold'>What you want</h3>
            <div className='property-sell add-property-body py-5'>
                <AddPropertyItem img={buyImg} link='allProperty' title="Buy a property" info="Find your dream property in a very easy way" btn="Find Property"></AddPropertyItem>
                <AddPropertyItem img={sellImg} link='addProperty' title="Sell a property" info="Post an add to sell or for rent your property" btn="Post an ad"></AddPropertyItem>
                <AddPropertyItem img={rentImg} link='allProperty' title="Rent a property" info="Find rental for your living or office  or any financial corporation" btn="Find Rental"></AddPropertyItem>
            </div>
        </div>
    );
};

export default AddPropertySection;