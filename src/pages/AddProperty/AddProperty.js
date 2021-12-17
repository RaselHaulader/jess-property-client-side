import React from 'react';
import Header from '../Header/Header';
import './AddPropertyStyle.css';

const AddProperty = () => {
    return (
        <div>
            <Header></Header>
            <div className='container text-secondary'>
                <hr />
                <div>
                    <p>Home &gt; <span className='text-danger'> Add Property</span></p>
                </div>
                <h3>Add Property</h3>
                <div className='row addProperty  w-100'>
                    <div className='col-12 col-md-8 '>
                        {/* basic info  */}
                        <div className='addProperty-basicInfo'>
                            <div className='d-flex my-4 align-items-center'>
                                <span style={{ fontSize: '12px' }} className='border border-danger me-1 text-danger rounded-circle px-2'><i class="fas fa-info"></i> </span>
                                <h5 className='pb-0 fw-bold mb-0'>Basic Info</h5>
                            </div>
                            <label htmlFor="">Title *</label><br />
                            <input placeholder='' className='w-100' type="\" /><br />
                            <div className='row my-3'>
                                <div className='col-12 col-md-6'>
                                    <label htmlFor="">Category *</label><br />
                                    <select className='w-100'>
                                        <option value="">For Sell</option>
                                        <option value="">For Rent</option>
                                    </select>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <label htmlFor="">Property Type *</label><br />
                                    <select className='w-100'>
                                        <option value="">Apartment</option>
                                        <option value="">Home</option>
                                        <option value="">Land</option>
                                        <option value="">Shop</option>
                                        <option value="">Office</option>
                                        <option value="">Commercial</option>
                                    </select>
                                </div>
                            </div>
                            <div className='row my-3'>
                                <div className='col-12 col-md-6'>
                                    <label htmlFor="">Property Size *</label><br />
                                    <input placeholder=' sqm' className='w-100' type="text" />
                                </div>
                                <div className='col-12 col-md-6'>
                                    <label htmlFor="">Price*</label><br />
                                    <input className='w-100' placeholder=' $' type="number" />
                                </div>
                            </div>
                            <div className='my-3'>
                                <label htmlFor="">Details</label><br />
                                <textarea className='w-100' />
                            </div>
                        </div>
                        {/* location */}
                        <div className='addProperty-basicInfo'>
                            <div className='d-flex my-4 align-items-center'>
                                <span style={{ fontSize: '12px' }} className='border border-danger me-1 text-danger rounded-circle px-1'><i className="fas fa-map-marker-alt"></i></span>
                                <h5 className='pb-0 fw-bold mb-0'>Location</h5>
                            </div>
                            <div className='row my-3'>
                                <div className='col-12 col-md-6'>
                                    <label htmlFor="">District *</label><br />
                                    <select className='w-100'>
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
                                <div className='col-12 col-md-6'>
                                    <label htmlFor="">Upozila *</label><br />
                                    <input type="text" className='w-100' />
                                </div>
                            </div>
                            <div className='row my-3'>
                                <div className='col-12 col-md-6'>
                                    <label htmlFor="">City Type *</label><br />
                                    <select className='w-100'>
                                        <option value="">Municipality</option>
                                        <option value="">Union</option>
                                    </select>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <label htmlFor="">Village *</label><br />
                                    <input type="text" className='w-100' />
                                </div>
                            </div>
                            <label htmlFor="">Street no *</label><br />
                            <input className='w-100' type="text" />
                        </div>
                       
                        {/* photo  */}
                        <div className='addProperty-basicInfo'>
                            <div className='d-flex my-4 align-items-center'>
                                <span style={{ fontSize: '12px' }} className='border border-danger me-1 text-danger rounded-circle px-1'><i className="far fa-images"></i></span>
                                <h5 className='pb-0 fw-bold mb-0'>Photo</h5>
                            </div>
                            <input type="text" /> <button>Upload</button>
                        </div>

                    </div>
                    <div className='col-12 col-md-4'>
                        {/* contact  */}
                        <div className='addProperty-basicInfo'>
                            <div className='d-flex my-4 align-items-center'>
                                <span style={{ fontSize: '12px' }} className='border border-danger me-1 text-danger rounded-circle px-1'><i class="far fa-id-badge"></i> </span>
                                <h5 className='pb-0 fw-bold mb-0'>Contact Info</h5>
                            </div>
                            <label htmlFor="">Name *</label><br />
                            <input className='w-100' type="text" /><br />
                            <label htmlFor="">Phone *</label><br />
                            <input className='w-100' type="text" /><br />
                            <label htmlFor="">Email *</label><br />
                            <input className='w-100' type="text" /><br />
                            <button className='w-100 my-3'>Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProperty;