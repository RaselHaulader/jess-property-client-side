import React from 'react';
import './BannerStyle.css';
import banner from '../../images/bannerbg.png'
import Header from '../Header/Header';
const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className='banner-container d-flex align-items-center'>
            <div className='banner-input-container pb-5 w-100'>
                <Header></Header>
               <div className='container'>
               <hr />
               </div>
                <div className='row h-100 pb-5 align-items-center p-0 m-0'>
                    <div className='col-12 col-md-6 text-white ps-5'>
                        <h1>Find Your <br/> Dream Property </h1>
                        <p>Make your life easy and beautiful by</p>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='input-container w-75 mx-auto p-5'>
                            <div>
                                <label className='mb-1 text-danger' htmlFor="">Property Type</label><br />
                                <select className=' w-100'>
                                    <option value="">Apartment</option>
                                    <option value="">Home</option>
                                    <option value="">Land</option>
                                    <option value="">Shop</option>
                                    <option value="">Office</option>
                                    <option value="">Commercial</option>
                                </select>
                            </div>
                            <div>
                                <label className='mb-1 text-danger' htmlFor="">Location</label><br />
                                <select className=' w-100'>
                                    <option value="">Jashore</option>
                                    <option value="">Khulna</option>
                                    <option value="">Jhenidah</option>
                                    <option value="">Narail</option>
                                    <option value="">Magura</option>
                                    <option value="">Kustia</option>
                                    <option value="">Meherpur</option>
                                    <option value="">Bagerhat</option>
                                </select>
                            </div>

                            <div>
                                <label style={{ color: 'transparent' }} htmlFor=""> btn</label> <br />
                                <button className='btn w-100 btn-danger'>Find Property</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;