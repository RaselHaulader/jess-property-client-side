import React from 'react';
import { useSelector } from 'react-redux';
import './userProfile.css';

const UserProfile = () => {
    const user = useSelector(state => state.user.userAuth)
    return (
        <div className='profile-container'>
            <div className='text-center'>
                {user.photoURL ? <img src={user.photoURL} alt="" /> : <img src='https://i.ibb.co/vJnbMKn/userDemo.png' alt />}
            </div>
            <p>Name: <span>  </span> {user.displayName}</p>
            <p>Email: <span>  </span> {user.email}</p>
        </div>
    );
};

export default UserProfile;