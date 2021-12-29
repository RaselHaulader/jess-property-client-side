import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header/Header';
import './PropertyDetails.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PropertyDetails = () => {
    const user = useSelector(state => state.user.userAuth)
    const [item, setItem] = useState({})
    const msgRef = useRef()
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://secret-basin-56489.herokuapp.com/selectedItem/${id}`)
            .then(res => {
                setItem(res.data)
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            })
    }, [])

    const addWish = () => {
        const data = {
            id: item._id,
            user: user.email,
            name: item.title,
            price: item.price,
            category: item.category,
            PropertyType: item.PropertyType
        }
        axios.post('http://localhost:5000/addWish', data)
            .then(res => {
                if (res.data.acknowledged) {
                    window.alert('Success')
                }
            })
    }
    const handleMsg = () => {
       
       if (msgRef.current.value.length > 10) {
        const data = {
            message: msgRef.current.value,
            from: user.email,
            to: item.user,
            postId : item._id,
            propertyName : item.title,
            time: new Date().toLocaleString()
        }
        axios.post('http://localhost:5000/addMsg', data)
            .then(res => {
                if (res.data.acknowledged) {
                    window.alert('Success')
                }
            })
       } else if(msgRef.current.value.length < 10){
        window.alert('Massage should be minimum length 10 character')
       }
    }

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
                    <div className='col-12  col-md-8 py-4'>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <span className='tagName newTagName'>New</span>
                                <span className='tagName verifiedTagName'>Verified</span>
                                <span className='tagName featuredTagName'>Featured</span>
                            </div>
                            <button onClick={addWish} className='styleBtn'>Add to wish list</button>
                        </div>
                        <div className='addProperty-basicInfo d-flex justify-content-between'>
                            <h3>{item?.title}</h3> <h3 className='text-danger'>${item?.price} {item?.category == 'For Rent' ? "/month" : ''}</h3>
                        </div>
                        <div className='text-secondary'>
                            <div className='addProperty-basicInfo '>
                                <p><span className='fw-bold'>Category:</span> {item?.category}</p>
                                <p><span className='fw-bold'>Property Type:</span> {item?.PropertyType}</p>
                                <p><span className='fw-bold'>Property Size:</span> {item?.propertySize}sqm</p>
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
                            <p className='text-secondary'>{item?.details}</p>
                        </div>

                    </div>
                    <div className='col-12 col-md-4 p-4 pt-5'>
                        <div className='buyerInfo addProperty-basicInfo'>
                            <h4 className='fw-bold'>Contact With Seller</h4>
                            <hr />
                            <div className='text-secondary'>
                                <p><span className='fw-bold'>Name:</span> {item?.name}</p>
                                <p><span className='fw-bold'>Email:</span> {item?.email}</p>
                                <p><span className='fw-bold'>Phone:</span> {item?.phone}</p>
                            </div>
                            <p><span className='fw-bold'>Your Message</span></p>
                            <textarea placeholder='minimum 10 character' minLength='10' ref={msgRef} className='w-100' />
                            <button onClick={handleMsg} className='w-100 my-3'>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;