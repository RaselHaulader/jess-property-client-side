import React from 'react';

const AllPropertyItem = ({img}) => {
    return (

        <div className="property-card">
            <div className="card-image">
                <img src={img} alt="" />
                <div className="overley">
                </div>
            </div>
            <div className="card-details">
                <p style={{color: "tomato",fontWeight:"bold"}}>FOR SALE</p>
                <h4>Land sell jashore</h4>
                <h5>7500sqm</h5>
                <p style={{color:"gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, neque!</p>
                <h6 style={{color: "rgba(236, 95, 95, 0.966)",fontWeight:"600"}}>৳ 150000</h6>
                <hr />
                <div className="card-footers">
                    <p>8ft <i className="fas fa-text-width"></i></p>
                    <p> paka <i className="fas fa-road"></i> </p>
                    <p>Union <i className="fas fa-map-marker-alt"></i></p>
                    <p></p>
                </div>
            </div>
        </div>

    );
};

export default AllPropertyItem;