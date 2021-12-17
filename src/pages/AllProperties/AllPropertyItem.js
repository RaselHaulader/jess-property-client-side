import React from 'react';

const AllPropertyItem = ({ img }) => {
    return (

        <div className="property-card">
            <div className="card-image">
                <img src={img} alt="" />
                <div className="overley">

                </div>
                <div className='overley-2'>
                    <p className='overley-tag1'>New</p> <br />
                   {true ?  <p className='overley-tag2 '>Verified</p> : ''}
                </div>

            </div>
            <div className="card-details">
                <p style={{ color: "crimson"}}>For sale</p>
                <h6 className='fw-bold'>Land jashore || 200sqm</h6>
                <p className='my-3'> kazi para, 5 no word, sadar , Jashore, Khulna</p>
                <h6 style={{ color: "rgba(236, 95, 95, 0.966)", fontWeight: "600" }}>৳ 150000</h6>
                <hr />
                <div className="card-footers">
                    <p className='p-0 m-0'>8ft <i className="fas fa-text-width"></i></p>
                    <p className='p-0 m-0'> paka <i className="fas fa-road"></i> </p>
                    <p className='p-0 m-0'>Union <i className="fas fa-map-marker-alt"></i></p>
                </div>
            </div>
        </div>

    );
};

export default AllPropertyItem;