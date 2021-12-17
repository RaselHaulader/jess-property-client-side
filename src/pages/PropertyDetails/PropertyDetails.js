import React from 'react';
import Header from '../Header/Header';
import img from '../../images/bannerbg.png';
import './PropertyDetails.css';

const PropertyDetails = () => {
    return (
        <div>
            <Header></Header>

            <div className='container'>
                <hr />
                <p>Home &gt; Property for  <span>sell</span> &gt;  <span className='text-danger'>Property name</span></p>

                <div className='row w-100 px-0 mx-0'>
                    <div className='col-8 ps-0 h-100'>
                        <img width='100%' style={{ borderRadius: '10px' }} src={img} alt="" />
                    </div>
                    <div className='col-4 pe-0 d-flex flex-column justify-content-between'>
                        <img height='47%' style={{ borderRadius: '10px' }} src={img} alt="" />
                        <img height='47%' style={{ borderRadius: '10px' }} src={img} alt="" />
                    </div>
                    <div className='col-12 text-secondary col-md-8 py-4'>
                        <div className='d-flex justify-content-between'>
                            <div>
                                 <span className='tagName newTagName'>New</span>
                                 <span className='tagName verifiedTagName'>Verified</span>
                                 <span className='tagName featuredTagName'>Featured</span>
                            </div>
                            <button className='styleBtn'>Add to wish list</button>
                        </div>
                        <div className='addProperty-basicInfo d-flex justify-content-between'>
                            <h3>Property</h3> <h3 className='text-danger'>$200</h3>
                        </div>
                        <div>
                            <div className='addProperty-basicInfo '>
                                <p><span className='fw-bold'>Category:</span> For sell</p>
                                <p><span className='fw-bold'>Property Type:</span> Apartment</p>
                                <p><span className='fw-bold'>Property Size:</span> 200sqm</p>
                            </div>
                            <div className='addProperty-basicInfo '>
                                <p><span className='fw-bold'>District:</span> Jashore</p>
                                <p><span className='fw-bold'>Upozila:</span> Sadar</p>
                                <p><span className='fw-bold'>City Type:</span> Municipality</p>
                                <p><span className='fw-bold'>Village:</span> Dharmatala</p>
                                <p><span className='fw-bold'>Street No:</span> 23232rd</p>
                            </div>
                        </div>
                        <div className='addProperty-basicInfo'>
                            <h4>Overview</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel fuga, assumenda placeat ex maxime porro.</p>
                        </div>

                    </div>
                    <div className='col-12 col-md-4 p-4'>
                        <div className='buyerInfo addProperty-basicInfo'>
                            <h4 className='fw-bold'>Provide your info</h4>
                            <hr />
                            <label htmlFor="">Name</label><br />
                            <input className='w-100' type="text" /><br />
                            <label htmlFor="">Number </label><br />
                            <input className='w-100' type="text" /><br />
                            <label htmlFor="">Email</label><br />
                            <input className='w-100' type="text" /><br />
                            <label htmlFor="">Your Message</label>
                            <textarea className='w-100' />
                            <button className='w-100 my-3'>Send Request</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;