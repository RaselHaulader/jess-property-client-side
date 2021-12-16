import React from 'react';
import AddPropertyItem from './AddPropertyItem';
import buyImg from '../../images/vectorpaint.svg';
import sellImg from '../../images/vectorpaint (1).svg';
import rentImg from '../../images/vectorpaint (2).svg';

const AddPropertySection = () => {
    return (
        <div className='container my-5'>
            <div className='property-sell'>
                <AddPropertyItem img={buyImg} title="Buy a property" info="info" btn="Find Property"></AddPropertyItem>
                <AddPropertyItem img={sellImg} title="Sell a property" info="info" btn="Post an ad"></AddPropertyItem>
                <AddPropertyItem img={rentImg} title="Rent a property" info="info" btn="Find Rental"></AddPropertyItem>
            </div>
        </div>
    );
};

export default AddPropertySection;