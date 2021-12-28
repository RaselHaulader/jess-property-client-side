import React, { useEffect, useState } from 'react';
import AllPropertyItem from './AllPropertyItem';
import img from '../../images/bannerbg.png'
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProperties = () => {
   const [items, setItems] = useState([])
    useEffect(() => {
        axios('https://secret-basin-56489.herokuapp.com/allProperties4')
            .then(res => {
                console.log(res.data);
                setItems(res.data)
            })
    }, [])
    return (
        <div className='container my-5 pb-5'>
            <div className='d-flex justify-content-between mb-3 mt-5'>
                <h3 className='fw-bolder text-uppercase'>All Properties</h3>
                <Link className='text-decoration-none' to='/allProperty'><p style={{cursor:'pointer'}} className='text-danger fw-bold'>Views all <i className="fas fa-long-arrow-alt-right"></i></p></Link>
            </div>
            <div className='properties-container '>
               {items.map(item=> <AllPropertyItem key={item?._id} items={item}/>)}
            </div>
        </div>
    );
};

export default AllProperties;