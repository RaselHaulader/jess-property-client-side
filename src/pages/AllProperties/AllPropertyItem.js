import React from 'react';
import { Link } from 'react-router-dom';

const AllPropertyItem = ({ items, deletePost }) => {
    return (

        <Link className='text-decoration-none' to={deletePost ? '':`/details/${items?._id}`}>
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
                    <div className='row align-items-ce'>
                        <h6 className='col-8' style={{ color: "rgba(236, 95, 95, 0.966)", fontWeight: "600" }}>৳ {items?.price} </h6>
                        {
                            deletePost && <>
                                <Link className='col-2' to={`/details/${items?._id}`}><i className="far  fa-eye"></i></Link> <i onClick={() => deletePost(items?._id)} className="far col-2 fa-trash-alt text-danger"></i>
                            </>
                        }
                    </div>
                    <hr />
                    <div className="card-footers">
                        {!deletePost && <>
                            <small className='p-0 m-0'>{items?.PropertyType} <i className="fas fa-text-width"></i></small>
                            <small className='p-0 m-0'> {items?.streetNo} <i className="fas fa-road"></i> </small>
                            <small className='p-0 m-0'>{items?.upozila} <i className="fas fa-map-marker-alt"></i></small>
                        </>}

                    </div>
                </div>
            </div>
        </Link>

    );
};

export default AllPropertyItem;