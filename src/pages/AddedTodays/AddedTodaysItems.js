import React from 'react';
import './AddedTodaysStyle.css';

const AddedTodaysItems = ({ img }) => {
    return (
        <div style={{  backgroundImage:`linear-gradient(180deg, rgba(255,255,255,0) 50%, rgba(0,0,0,0.6997308623924684) 100%), url('${img}')`   }} className='todayItem-container d-flex flex-column justify-content-between'>
            <div className='mb-5 pb-5 todays-added-tag'>
                <p>New</p>
                <p>Verified</p>
            </div>
            <div className='d-flex justify-content-between align-items-end'>
                <div className='text-light'>
                    <p className=' m-1'>FOR SALE</p>
                    <h4 className=' m-1'> Jessore sadar </h4>
                    <p className=' m-1'><small><i className="fas fa-map-marker-alt"></i> Location dhaka bangladesh plasure</small></p>
                </div>
                <div className='todaysAdded-btn'>
                    <button className='bg-transparent text-light fw-bold border-0'>From $322 </button> <i className="far fa-heart"></i>
                </div>
            </div>
        </div>
    );
};

export default AddedTodaysItems;