import React from 'react';
import img from '../../images/bannerbg.png'
import AddedTodaysItems from './AddedTodaysItems';

const AddedTodays = () => {
    return (
        <div className='container pb-5 pt-1 my-5'>
            <div className='d-flex justify-content-between mb-3 mt-5'>
                <h3 className='fw-bold'>ADDED TODAY</h3>
                <p className='text-danger fw-bold'>Views All <i className="fas fa-long-arrow-alt-right"></i></p>
            </div>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <AddedTodaysItems img={img} />
                </div>
                <div className='col-12 col-md-6'>
                    <div className='mb-4'>
                        <AddedTodaysItems img={img} />
                    </div>
                    <div>
                        <AddedTodaysItems img={img} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddedTodays;