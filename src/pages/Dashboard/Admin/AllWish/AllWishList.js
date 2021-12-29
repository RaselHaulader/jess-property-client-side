import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { handleLoading2 } from '../../../../redux/slices/userSlices';
import UsersWishListItem from '../../User/UserWish/UsersWishListItem';
import AllWishListItem from './AllWishListItem';


const AllWishList = () => {
  const [wishes, setWish] = useState([])
  const loading = useSelector(state => state.user.loading2)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleLoading2(false))
    axios.get(`https://secret-basin-56489.herokuapp.com/getAllWish`)
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
          </div> : wishes.map(wish => <AllWishListItem deleteWish={deleteWish} item={wish}></AllWishListItem>)
      }

    </div>
  );
};

export default AllWishList;