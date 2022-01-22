import React from 'react';
import './BannerStyle.css';
import banner from '../../images/bannerbg.png'
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addFilterValue } from '../../redux/slices/propertySlice';
import { useState } from 'react';
const Banner = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const categoryRef = useRef()
    const locationRef = useRef()
    const handleFilter = () => {
        const filteredData = {}
        categoryRef.current.value !== '' && (filteredData.PropertyType = categoryRef.current.value)
        locationRef.current.value !== '' && (filteredData.district = locationRef.current.value)
        dispatch(addFilterValue(filteredData))
        navigate('/allProperty')
    }
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className='banner-container d-flex align-items-center'>
            <div className='banner-input-container pb-5 w-100'>

                <div className='container'>
                </div>
                <div className='row h-100 pb-5 align-items-center p-0 m-0'>
                    <div className='col-12 col-md-6 text-white ps-5'>
                        <h1>Find Your <br /> Dream Property </h1>
                        <p>Make your life easy and beautiful by</p>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='input-container w-75 mx-auto p-5'>
                            <div>
                                <label className='mb-1 text-danger' htmlFor="">Property Type</label><br />
                                <select ref={categoryRef} className=' w-100'>
                                    <option value="">Select</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="Home">Home</option>
                                    <option value="Land">Land</option>
                                    <option value="Shop">Shop</option>
                                    <option value="Office">Office</option>
                                    <option value="Commercial">Commercial</option>
                                </select>
                            </div>
                            <div>
                                <label className='mb-1 text-danger' htmlFor="">Location</label><br />
                                <select ref={locationRef} className=' w-100'>
                                    <option value="">Select</option>
                                    <option value="Jashore">Jashore</option>
                                    <option value="Khulna">Khulna</option>
                                    <option value="Jhenidah">Jhenidah</option>
                                    <option value="Narail">Narail</option>
                                    <option value="Magura">Magura</option>
                                    <option value="Kustia">Kustia</option>
                                    <option value="Meherpur">Meherpur</option>
                                    <option value="Bagerhat">Bagerhat</option>
                                </select>
                            </div>

                            <div>
                                <label style={{ color: 'transparent' }} htmlFor=""> btn</label> <br />
                                <button onClick={handleFilter} className='btn w-100 btn-danger'>Find Property</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;