import React from 'react';
import { useSelector } from 'react-redux';
import useAuth from '../../../../Hooks/useAuth';
import './userProfile.css';

const UserProfile = () => {
    const user = useSelector(state => state.user.userAuth)
    const {verifyEmail} = useAuth()
    const handleVerify=()=>{
        verifyEmail()
    }
    return (
        <div className='profile-container'>
            <div className='text-center'>
                {user.photoURL ? <img src={user.photoURL} alt="" /> : <img src='https://i.ibb.co/vJnbMKn/userDemo.png' alt />}
               
            </div>
            <p>Name:   {user.displayName} { user.emailVerified == true ? <span className='float-end verify text-info mt-1'>Verified</span> : <span className='float-end mt-1 verify text-danger' onClick={handleVerify} style={{cursor:'pointer'}}>Click to verify</span>}</p>
            <p>Email:  {user.email}</p>
           
           
        </div>
    );
};

export default UserProfile;