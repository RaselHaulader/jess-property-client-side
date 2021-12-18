import React from 'react';
import { Link } from 'react-router-dom';

const AllPropertyItem = ({ items }) => {
    return (

        <Link className='text-decoration-none' to={`/details/${items?._id}`}>
            <div className="property-card">
                <div className="card-image">
                    <img src={items?.img1} alt="" />
                    <div className="overley">

                    </div>
                    <div className='overley-2'>
                        <p className='overley-tag1'>New</p> <br />
                        {true ? <p className='overley-tag2 '>Verified</p> : ''}
                    </div>

                </div>
                <div className="card-details">
                    <p style={{ color: "crimson" }}>{items?.category}</p>
                    <h6 className='fw-bold'>{items?.title} || {items?.propertySize}sqm</h6>
                    <p className='my-3'> {items?.district + ", " + items?.upozila + ", " + items?.village + ", " + items?.streetNo} </p>
                    <h6 style={{ color: "rgba(236, 95, 95, 0.966)", fontWeight: "600" }}>৳ {items?.price}</h6>
                    <hr />
                    <div className="card-footers">
                        <p className='p-0 m-0'>8ft <i className="fas fa-text-width"></i></p>
                        <p className='p-0 m-0'> paka <i className="fas fa-road"></i> </p>
                        <p className='p-0 m-0'>Union <i className="fas fa-map-marker-alt"></i></p>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default AllPropertyItem;