import React from 'react';

const AllUserItem = ({ item }) => {
    const {name, usersPost, UsersRequest,UsersWish } = item
    return (
        <div className='container boxShadow'>
            <div className='row'>
                <h6 className='col-3'>{name}</h6>
                <h6 className='col-3'> Total Post: {usersPost}</h6>
                <h6 className='col-3'>Total Request : {UsersRequest}</h6>
                <h6 className='col-3'>Total wish : {UsersWish}</h6>
            </div>
        </div>
    );
};
export default AllUserItem;