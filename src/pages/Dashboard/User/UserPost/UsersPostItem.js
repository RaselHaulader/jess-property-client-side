import React from 'react';
import '../../DashBoardStyle.css';
import { Link } from 'react-router-dom';

const UsersPostItem = ({ item ,deletePost}) => {
    console.log(item)
    const { title, price, category, PropertyType, _id } = item
    return (
        <div className='container boxShadow '>
            <div className='row'>
                <h6 className='col-md-3 col-12'>{title}</h6>
                <h6 className='col-md-3 col-12'>{PropertyType}</h6>
                <h6 className='col-md-2 col-12'> {category} </h6>
                <h6 className='col-md-2 col-12'>$ {price}</h6>
                <div className='col-md-2 col-12 d-flex align-items-center justify-content-evenly'> <Link to={`/details/${_id}`}><i  className="far fa-eye"></i></Link> <i onClick={()=>deletePost(_id)} className="far fa-trash-alt text-danger"></i> </div>
            </div>
        </div>
    );
};

export default UsersPostItem;