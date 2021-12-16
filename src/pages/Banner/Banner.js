import React from 'react';
import './BannerStyle.css';
import Dropdown from 'react-bootstrap/Dropdown'
import banner from '../../images/bannerbg.png'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className='banner-container d-flex align-items-center'>
            <div className='banner-input-container d-flex justify-content-center align-items-center w-100'>
                <div >
                    <div className='text-white text-center'>
                        <h1>Find Your Dream Property </h1>
                        <p>Make your life easy and beautiful by</p>
                    </div>
                    <div className='d-flex input-container justify-content-center align-items-center'>
                        <div className="mx-1">
                            <label className='mb-1 text-danger' htmlFor="">Property Type</label><br />
                            <select className='btn btn-light' name="carlist">
                                <option value="volvo">Property</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className="mx-1">
                        <label className='mb-1 text-danger' htmlFor="">Location</label><br />
                            <select className='btn btn-light' name="carlist">
                                <option value="volvo">Property</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        
                        <div className=" mx-1">
                            <label style={{color:'transparent'}} htmlFor=""> btn</label> <br />
                            <button className='btn btn-danger'>Find Property</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;