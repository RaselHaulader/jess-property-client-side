import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AllPropertyItem from '../../../AllProperties/AllPropertyItem';
import UsersPostItem from './UsersPostItem';

const UsersPosts = () => {
    const [items, setPost] = useState([])
    const user = useSelector(state => state.user.userAuth)
    // get users post
    useEffect(() => {

        axios.get(`http://localhost:5000/userPosts/${user.email}`)
            .then(res => {
                setPost(res.data)
                console.log(res.data)
            })
    }, [])

    const deletePost = (id) => {
        if (window.confirm('Sure?')) {
            axios.post('http://localhost:5000/deletePost', { id })
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const restPost = items.filter(post => post._id !== id)
                        setPost(restPost)
                    }
                })
        }

    }
    return (
        <div>
            <div className='items-container'>
                {
                    items.map(item => <AllPropertyItem deletePost={deletePost} items={item}></AllPropertyItem>)
                }

            </div>
        </div>
    );
};

export default UsersPosts;