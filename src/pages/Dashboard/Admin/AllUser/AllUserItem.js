import React from 'react';

const AllUserItem = ({ item,deleteUser }) => {
    const {name, email, _id } = item
    return (
        <div className='container boxShadow'>
            <div className='row'>
                <h6 className='col-md-4 col-12'>{name}</h6>
                <h6 className='col-md-4 col-12'>{email}</h6>
            <div className='col-md-4 col-12 d-flex align-items-center justify-content-evenly'> <i onClick={() => deleteUser(_id)} className="far ms-2 fa-trash-alt text-danger"></i> </div>  
            </div>
        </div>
    );
};
export default AllUserItem;