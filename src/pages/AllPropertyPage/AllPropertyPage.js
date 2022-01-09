import React, { useEffect, useState } from 'react';
import AllPropertyItem from '../AllProperties/AllPropertyItem';
import './AllPropertyPageStyle.css'
import Header from '../Header/Header';
import axios from 'axios';
import Footer from '../Footer/Footer';
const AllPropertyPage = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        axios('https://secret-basin-56489.herokuapp.com/allProperties')
            .then(res => {
                setItems(res.data)
            })


    }, [])
    return (
        <div className='pt-5' style={{ maxWidth: '1200px', margin: 'auto' }}>
           
            <div className='row w-100 filter-section mt-5'>
                <div className='col-12 col-md-4 px-5 '>
                    <div>
                        <h3 className='p-0 m-0'>Filter</h3>
                        <hr />
                        <label htmlFor="">Category </label><br />
                        <select className='w-100'>
                            <option value="">For Sell</option>
                            <option value="">For Rent</option>
                        </select>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Location</label><br />
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
                    </div>
                    <div>
                        <label htmlFor="">Property Type </label><br />
                        <select className='w-100'>
                            <option value="">Apartment</option>
                            <option value="">Home</option>
                            <option value="">Land</option>
                            <option value="">Shop</option>
                            <option value="">Office</option>
                            <option value="">Commercial</option>
                        </select>
                    </div>
                    <div className='priceRange'>
                        <label htmlFor="">Price Range</label> <br />
                        <div d-flex>
                            <input className='w-50' placeholder=' min' type="number" />
                            <input placeholder=' max' className='w-50' type="number" />
                        </div>
                    </div>
                    <button className='w-100 my-3 applyFilter'>Apply Filter</button>
                </div>
                <div className='col-12 col-md-8 px-5 pt-0 mt-0 propertyPageItems'>
                    <div>
                        <p className='my-1 py-0'>Home &gt; <span className='text-danger'> Property List</span></p>
                    </div>
                    <h3 className='my-3 fw-bolder'>Property For sell</h3>
                    <div>
                        <div>
                            <label className='text-secondary' htmlFor="">Sort by :</label> <select>
                                <option>Newest</option>
                                <option>Oldest</option>
                            </select>
                        </div>
                    </div>
                    <div className='allPropertyPageProperties mt-3'>
                        { items.map(item => <AllPropertyItem key={item._id} items={item} />) }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllPropertyPage;