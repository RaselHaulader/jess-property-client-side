import React, { useState } from 'react';
import Header from '../Header/Header';
import './AddPropertyStyle.css';
import axios from 'axios'
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';
const AddProperty = () => {
    // user from redux store
    const user = useSelector(state=> state.user.userAuth)
    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        let propertiesDetails = {}
        // set date
        propertiesDetails['date'] = new Date().toLocaleString();
        // set user email
        propertiesDetails['user'] = user.email
        // set all input data to propertyDetails object by using a loop 
        for (let i = 0; i < e.target.length; i++) {
            if (e.target[i].name) {
                propertiesDetails[e.target[i].name] = e.target[i].value
            }
        }
        axios.post('https://secret-basin-56489.herokuapp.com/post', propertiesDetails)
            .then(res => {
                if (res.data.acknowledged) {
                    window.alert('Success')
                    e.target.reset()
                }
            })
    }
    return (
        <div>
            <Header></Header>
            <div className='container text-secondary'>
                <hr />
                <div>
                    <p>Home &gt; <span className='text-danger'> Add Property</span></p>
                </div>
                <h3>Add Property</h3>
                <form onSubmit={handleSubmit}>
                    <div className='row addProperty  w-100'>
                        <div className='col-12 col-md-8 '>
                            {/* basic info  */}
                            <div className='addProperty-basicInfo'>
                                <div className='d-flex my-4 align-items-center'>
                                    <span style={{ fontSize: '12px' }} className='border border-danger me-1 text-danger rounded-circle px-2'><i class="fas fa-info"></i> </span>
                                    <h5 className='pb-0 fw-bold mb-0'>Basic Info</h5>
                                </div>
                                <label htmlFor="">Title *</label><br />
                                <input name='title' required placeholder='' className='w-100' type="\" /><br />
                                <div className='row my-3'>
                                    <div className='col-12 col-md-6'>
                                        <label htmlFor="">Category *</label><br />
                                        <select required name='category' className='w-100'>
                                            <option value="">select</option>
                                            <option value="For Sell">For Sell</option>
                                            <option value="For Rent">For Rent</option>
                                        </select>
                                    </div>
                                    <div className='col-12 col-md-6'>
                                        <label htmlFor="">Property Type *</label><br />
                                        <select required name='PropertyType' className='w-100'>
                                            <option value="">select</option>
                                            <option value="Apartment">Apartment</option>
                                            <option value="Home">Home</option>
                                            <option value="Land">Land</option>
                                            <option value="Shop">Shop</option>
                                            <option value="Office">Office</option>
                                            <option value="Commercial">Commercial</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row my-3'>
                                    <div className='col-12 col-md-6'>
                                        <label htmlFor="">Property Size *</label><br />
                                        <input name="propertySize" required placeholder=' sqm' className='w-100' type="number" />
                                    </div>
                                    <div className='col-12 col-md-6'>
                                        <label htmlFor="">Price*</label><br />
                                        <input name="price" required className='w-100' placeholder=' $' type="number" />
                                    </div>
                                </div>
                                <div className='my-3'>
                                    <label htmlFor="">Details</label><br />
                                    <textarea name='details' required className='w-100' />
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
                                        <select required name='district' className='w-100'>
                                            <option value="">select</option>
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
                                    <div className='col-12 col-md-6'>
                                        <label htmlFor="">Upozila *</label><br />
                                        <input name='upozila' required type="text" className='w-100' />
                                    </div>
                                </div>
                                <div className='row my-3'>
                                    <div className='col-12 col-md-6'>
                                        <label htmlFor="">City Type *</label><br />
                                        <select name='cityType' required className='w-100'>
                                            <option value="">select</option>
                                            <option value="Municipality">Municipality</option>
                                            <option value="Union">Union</option>
                                        </select>
                                    </div>
                                    <div className='col-12 col-md-6'>
                                        <label htmlFor="">Village *</label><br />
                                        <input name='village' required type="text" className='w-100' />
                                    </div>
                                </div>
                                <label htmlFor="">Street no *</label><br />
                                <input name='streetNo' className='w-100' type="text" />
                            </div>

                            {/* photo  */}
                            <div className='addProperty-basicInfo'>
                                <div className='d-flex my-4 align-items-center'>
                                    <span style={{ fontSize: '12px' }} className='border border-danger me-1 text-danger rounded-circle px-1'><i className="far fa-images"></i></span>
                                    <h5 className='pb-0 fw-bold mb-0'>Photo</h5>
                                </div>
                                <input name='img1' required type="text" /> <input name='img2' required type="text" /> <input name='img3' required type="text" />  <button>Upload</button>
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
                                <input name='name' required className='w-100' type="text" /><br />
                                <label htmlFor="">Phone *</label><br />
                                <input name='phone' required className='w-100' type="text" /><br />
                                <label htmlFor="">Email *</label><br />
                                <input name='email' required className='w-100' type="text" /><br />
                                <button type='submit' className='w-100 my-3'>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default AddProperty;



/* 
https://i.ibb.co/9GD6WFw/home3.png
https://i.ibb.co/fST46mN/land1.jpg
https://i.ibb.co/X23xGhn/land2.jpg
https://i.ibb.co/hCT620j/land3.jpg
https://i.ibb.co/nf1sxsP/offfice3.jpg
https://i.ibb.co/Mf0PC9z/office2.jpg
https://i.ibb.co/RYhN7FN/ofiice1.jpg
https://i.ibb.co/j85Q4vS/shop.jpg
https://i.ibb.co/q9W0Bf8/shop2.png
https://i.ibb.co/8m4qn3w/shop3.png
https://i.ibb.co/WzHH60z/apartment1.jpg
https://i.ibb.co/4V2h7XJ/apartment2.jpg
https://i.ibb.co/1fFyVnJ/apartment3.png
https://i.ibb.co/Drr23Fv/commercial1.png
https://i.ibb.co/z7fK9YC/commercial2.png
https://i.ibb.co/BTTqvVz/commercial3.png
https://i.ibb.co/tZxfXn2/home1.jpg
https://i.ibb.co/kKJf82X/home2.png

*/