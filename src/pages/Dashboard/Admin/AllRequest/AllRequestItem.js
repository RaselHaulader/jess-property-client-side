import React from 'react';

const AllRequestItem = ({item}) => {
    const {title, price } = item
    return (
        <div className='container boxShadow'>
            <div className='row'>
                <h5 className='col-3'>{title}</h5>
                <h5 className='col-3'>$ {price}</h5>
                <div className='col-3'><button>Cancel Request</button></div>
                <div className='col-3'><button>View Properties</button></div>
            </div>
        </div>
    );
};

export default AllRequestItem;