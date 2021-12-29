import React from 'react';
import { Link } from 'react-router-dom';
import './userRequest.css'

const UserRequestItems = ({ item, deleteMassage }) => {

    return (
        <div className='container col-12 col-md-4 userRequestItemContainer '>
            <div className='boxShadow'>
                <div>
                    <h6> <span className='fw-bold'>{item.propertyName}</span> <span className='float-end'><Link to={`/details/${item.postId}`}><i className="far fa-eye"></i></Link>   <i onClick={() => deleteMassage(item._id)} className="far ms-3 fa-trash-alt text-danger"></i></span> </h6>
                    <p className='my-3'>{item.message}</p>
                    <hr className='py-0 my-2' />
                    <small className='p-0 m-0 text-secondary'> To: {item.to} <br /> <small>Time : {item.time}</small></small>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default UserRequestItems;