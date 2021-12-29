import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UsersWishListItem from './UsersWishListItem';
import { handleLoading2 } from '../../../../redux/slices/userSlices';

const UsersWishList = () => {
    const [wishes, setWish] = useState([])
    const user = useSelector(state => state.user.userAuth)
    const loading = useSelector(state => state.user.loading2)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(handleLoading2(false))
        axios.get(`https://secret-basin-56489.herokuapp.com/getWish/${user.email}`)
            .then(res => {
                setWish(res.data)
                dispatch(handleLoading2(true))
            })
    }, [])

    const deleteWish = (id) => {
        if (window.confirm('Sure?')) {
            axios.post('https://secret-basin-56489.herokuapp.com/deleteWish', { id })
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
                loading && wishes.length === 0 && <h3 className='text-center'>You Have No wishes</h3>
            }
            {
                !loading ?
                    <div class="text-center">
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div> : wishes.map(wish => <UsersWishListItem deleteWish={deleteWish} item={wish}></UsersWishListItem>)
            }

        </div>
    );
};

export default UsersWishList;