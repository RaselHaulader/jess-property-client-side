import React from 'react';
import { Link } from 'react-router-dom';

const UsersWishListItem = ({ item, deleteWish }) => {
    const { name, price, id, category, PropertyType, _id } = item
  
    return (
        <div className='container boxShadow'>
            <div className='row'>
                <h6 className='col-md-3 col-12'>{name}</h6>
                <h6 className='col-md-3 col-12'>{PropertyType}</h6>
                <h6 className='col-md-2 col-12'> {category} </h6>
                <h6 className='col-md-2 col-12'>$ {price}</h6>
                <div className='col-md-2 col-12 d-flex align-items-center justify-content-evenly'> <Link to={`/details/${id}`}><i className="far fa-eye"></i></Link> <i onClick={() => deleteWish(_id)} className="far fa-trash-alt text-danger"></i> </div>
            </div>
        </div>
    );
};

export default UsersWishListItem;