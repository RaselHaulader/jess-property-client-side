import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { handleLoading2 } from '../../../../redux/slices/userSlices';
import AllUserItem from './AllUserItem';


const AllUser = () => {
  const [users, setUsers] = useState([])
  const loading = useSelector(state => state.user.loading2)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleLoading2(false))
    axios.get(`https://secret-basin-56489.herokuapp.com/allUsers`)
      .then(res => {
        setUsers(res.data)
        dispatch(handleLoading2(true))
      })
  }, [])

  const deleteUser = (id) => {
    if (window.confirm('Sure?')) {
      axios.post('https://secret-basin-56489.herokuapp.com/deleteUser', { id })
        .then(res => {
          if (res.data.deletedCount > 0) {
            const restUser = users.filter(user => user._id !== id)
            setUsers(restUser)
          }
        })
    }
  }

  return (
    <div>
      {
        loading && users.length === 0 && <h3 className='text-center'>You Have No wishes</h3>
      }
      {
        !loading ?
          <div class="text-center">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div> : users.map(wish => <AllUserItem deleteWish={deleteUser} item={wish}></AllUserItem>)
      }

    </div>
  );
};

export default AllUser;