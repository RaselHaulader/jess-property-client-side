import React from 'react';
import AddPropertyItem from './AddPropertyItem';
import buyImg from '../../images/buy.svg';
import sellImg from '../../images/sell.svg';
import rentImg from '../../images/rent.svg';

const AddPropertySection = () => {
    return (
        <div className='container my-5 py-3'>
            <div className='property-sell'>
                <AddPropertyItem img={buyImg} title="Buy a property" info="info" btn="Find Property"></AddPropertyItem>
                <AddPropertyItem img={sellImg} title="Sell a property" info="info" btn="Post an ad"></AddPropertyItem>
                <AddPropertyItem img={rentImg} title="Rent a property" info="info" btn="Find Rental"></AddPropertyItem>
            </div>
        </div>
    );
};

export default AddPropertySection;