import React from 'react';
import { Link } from 'react-router-dom';

const AllWishListItem = ({ item,deleteWish }) => {
    const { name, price, id, category, PropertyType, _id,user } = item

    return (
        <div className='container boxShadow'>
            <div className='row'>
                <small className='col-md-4 col-12 fw-bold'>{name}/{PropertyType}</small>
                <small className='col-md-4 col-12 fw-bold'>{user}</small>
                <small className='col-md-3 col-12 fw-bold'>{category} / ${price}</small>
                <div className='col-md-1 col-12 d-flex align-items-center justify-content-evenly'> <Link to={`/details/${id}`}><i className="far fa-eye"></i></Link> <i onClick={() => deleteWish(_id)} className="far ms-2 fa-trash-alt text-danger"></i> </div>
            </div>
        </div>
    );
};

export default AllWishListItem;