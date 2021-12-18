import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/bannerbg.png'
import AddedTodaysItems from './AddedTodaysItems';

const AddedTodays = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios('https://secret-basin-56489.herokuapp.com/allProperties3')
            .then(res => {
                console.log(res.data);
                setItems(res.data)
            })


    }, [])
    return (
        <div id="recent" className='container pb-5 pt-1 my-5'>
            <div className='d-flex justify-content-between mb-3 mt-5'>
                <h3 className='fw-bold'>ADDED RECENT</h3>
                <Link className='text-decoration-none' to='/allProperty'><p className='text-danger fw-bold'>See All <i className="fas fa-long-arrow-alt-right"></i></p></Link>
            </div>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <AddedTodaysItems items={items[0]} />
                </div>
                <div className='col-12 col-md-6'>
                    <div className='mb-4'>
                        <AddedTodaysItems items={items[1]}  />
                    </div>
                    <div>
                        <AddedTodaysItems items={items[2]}  />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddedTodays;