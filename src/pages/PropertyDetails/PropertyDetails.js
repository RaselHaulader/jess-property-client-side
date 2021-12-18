import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './PropertyDetails.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PropertyDetails = () => {
    const [item, setItem] = useState({})
    const {id} = useParams()
    useEffect(() => {
        axios.get(`https://secret-basin-56489.herokuapp.com/selectedItem/${id}`)
            .then(res => {
                setItem(res.data)
                console.log(res.data);
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            })
    }, [])
    
    return (
        <div>
            <Header></Header>

            <div className='container'>
                <hr />
               <div className=' justify-content-between'>
               <p>Home &gt; Property for  <span>{item?.category}</span> &gt;  <span className='text-danger'> {item?.title}</span></p>
               <p className='text-secondary m-0 pt-0'><small>Posted : {item?.date}</small></p>
               </div>

                <div className='row w-100 px-0 mx-0'>
                    <div className='col-8 ps-0 h-100'>
                        <img width='100%' height='100%' style={{ borderRadius: '10px' }} src={item?.img1} alt="" />
                    </div>
                    <div className='col-4 pe-0 d-flex flex-column justify-content-between'>
                        <img height='47%' style={{ borderRadius: '10px' }} src={item?.img2} alt="" />
                        <img height='47%' style={{ borderRadius: '10px' }} src={item?.img3} alt="" />
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
                            <h3>{item?.title}</h3> <h3 className='text-danger'>${item?.price} {item?.category == 'For Rent'? "/month" : ''}</h3>
                        </div>
                        <div>
                            <div className='addProperty-basicInfo '>
                                <p><span className='fw-bold'>Category:</span> {item?.category }</p>
                                <p><span className='fw-bold'>Property Type:</span> {item?.PropertyType}</p>
                                <p><span className='fw-bold'>Property Size:</span> {item?.propertySize }sqm</p>
                            </div>
                            <div className='addProperty-basicInfo '>
                                <p><span className='fw-bold'>District:</span> {item?.district}</p>
                                <p><span className='fw-bold'>Upozila:</span> {item?.upozila}</p>
                                <p><span className='fw-bold'>City Type:</span> {item?.cityType}</p>
                                <p><span className='fw-bold'>Village:</span> {item?.village}</p>
                                <p><span className='fw-bold'>Street No:</span> {item?.streetNo}</p>
                            </div>
                        </div>
                        <div className='addProperty-basicInfo'>
                            <h4>Overview</h4>
                            <p>{item?.details}</p>
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