import React from 'react';
import AllPropertyItem from '../AllProperties/AllPropertyItem';
import img from '../../images/bannerbg.png'
import './AllPropertyPageStyle.css'
import Header from '../Header/Header';
const AllPropertyPage = () => {
    return (
        <div style={{maxWidth:'1200px', margin:'auto'}}>
            <Header></Header>
            <div className='px-5'>
                <hr />
            </div>
            <div className='row w-100'>
                <div className='col-12 col-md-4 px-5'>
                    <div>
                        <button>For Rent</button> <button>For sell</button>
                        <hr />
                    </div>
                    <div>
                        <h3>Location</h3>
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <div>
                        <h3>Property Type</h3>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1"> I have a bike</label><br />
                    </div>
                    <div>
                        <h3>Property Price</h3>
                        <input type="text" />
                    </div>
                </div>
                <div className='col-12 col-md-8 px-5'>
                    <div>
                        <p>Home &gt; Property List</p>
                    </div>
                    <h3>Property For sell</h3>
                    <div>
                        <div>
                            sort by : <select>
                                <option>Option</option>
                            </select>
                        </div>
                    </div>
                    <div className='allPropertyPageProperties'>
                        <AllPropertyItem img={img} ></AllPropertyItem>
                        <AllPropertyItem img={img} ></AllPropertyItem>
                        <AllPropertyItem img={img} ></AllPropertyItem>
                        <AllPropertyItem img={img} ></AllPropertyItem>
                        <AllPropertyItem img={img} ></AllPropertyItem>
                        <AllPropertyItem img={img} ></AllPropertyItem>
                        <AllPropertyItem img={img} ></AllPropertyItem>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPropertyPage;