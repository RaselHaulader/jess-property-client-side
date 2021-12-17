import React from 'react';
import Header from '../Header/Header';
import img from '../../images/bannerbg.png'

const PropertyDetails = () => {
    return (
        <div>
            <Header></Header>
            <div className='px-3'>
                <div>
                    <p>Home &gt; Property for &gt; Property name</p>
                    <h3>Property Name</h3>
                    <p>Jahsore , road 1923, khulna</p>
                    <div>
                        <p><span>4 bed</span> <span>2 feet road </span> <span>Union area</span></p>
                    </div>
                </div>
                <div className='row w-100 px-0 mx-0'>
                    <div className='col-8 ps-0 h-100'>
                        <img width='100%' style={{ borderRadius: '10px' }} src={img} alt="" />
                    </div>
                    <div className='col-4 pe-0 d-flex flex-column justify-content-between'>
                        <img height='47%' style={{ borderRadius: '10px' }} src={img} alt="" />
                        <img height='47%' style={{ borderRadius: '10px' }} src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;