import React from 'react';
import { Link } from 'react-router-dom';
import './AddedTodaysStyle.css';

const AddedTodaysItems = ({ items }) => {
    // const {title, district,upozila,village, category,price,img1,streetNo} = items
    return (
        <Link className='text-decoration-none' to={`/details/${items?._id}`}><div style={{  backgroundImage:`linear-gradient(180deg, rgba(255,255,255,0) 50%, rgba(0,0,0,0.6997308623924684) 100%), url('${items?.img1}')`   }} className='todayItem-container d-flex flex-column justify-content-between'>
            <div className='mb-5 pb-5 todays-added-tag'>
                <p>New</p>
                <p>Verified</p>
            </div>
            <div className='d-flex justify-content-between align-items-end'>
                <div className='text-light'>
                    <p className=' m-1'>{items?.category}</p>
                    <h4 className=' m-1'> {items?.title}</h4>
                    <p className=' m-1'><small><i className="fas fa-map-marker-alt"></i> {items?.district + ", " + items?.upozila + ", " + items?.village + ", " + items?.streetNo}</small></p>
                </div>
                <div className='todaysAdded-btn'>
                    <button className='bg-transparent text-light fw-bold border-0'>$ {items?.price} </button> <i className="far fa-heart"></i>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default AddedTodaysItems;