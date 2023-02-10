import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleLoading2 } from '../../../../redux/slices/userSlices';
import AllPropertyItem from '../../../AllProperties/AllPropertyItem';

const UsersPosts = () => {
    const [items, setPost] = useState([])
    const loading = useSelector(state => state.user.loading2)
    const dispatch = useDispatch()

    const user = useSelector(state => state.user.userAuth)
    // get users post
    useEffect(() => {
        dispatch(handleLoading2(true))
        axios.get(`https://property-bazar-server.onrender.com/userPosts/${user.email}`)
            .then(res => {
                setPost(res.data)
                console.log(res.data)
                dispatch(handleLoading2(false))
            })
    }, [])

    const deletePost = (id) => {
        if (window.confirm('Sure?')) {
            axios.post('https://property-bazar-server.onrender.com/deletePost', { id })
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
            {
                !loading && items.length === 0 && <h3 className='text-center'>You Have No Post</h3>
            }
            {
                loading &&
                <div class="text-center text-primary">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            <div className='items-container'>

                {
                    items.length !== 0 && items.map(item => <AllPropertyItem deletePost={deletePost} items={item}></AllPropertyItem>)
                }
            </div>
        </div>
    );
};

export default UsersPosts;