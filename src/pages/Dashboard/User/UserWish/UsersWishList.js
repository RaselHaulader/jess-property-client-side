import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UsersWishListItem from './UsersWishListItem';


const UsersWishList = () => {
    const [wishes , setWish] = useState([])
    const user = useSelector(state => state.user.userAuth)
    useEffect(()=>{
        axios.get(`http://localhost:5000/getWish/${user.email}`)
        .then(res => {
            setWish(res.data)
        })
    },[])

    const deleteWish = (id) => {
        if (window.confirm('Sure?')) {
            axios.post('http://localhost:5000/deleteWish', { id })
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const restWish = wishes.filter(wish => wish._id !== id)
                        setWish(restWish)
                    }
                })
        }
    }
   
    return (
        <div>
            {
                wishes.map(wish=> <UsersWishListItem deleteWish={deleteWish} item={wish}></UsersWishListItem>)
            }
            
        </div>
    );
};

export default UsersWishList;