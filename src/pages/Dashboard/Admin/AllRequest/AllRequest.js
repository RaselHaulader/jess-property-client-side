import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { handleLoading2 } from '../../../../redux/slices/userSlices';
import AllPropertyItem from '../../../AllProperties/AllPropertyItem';
import AllRequestItem from './AllRequestItem';

const AllRequest = () => {
    const [massages, setMassage] = useState([])
    const loading = useSelector(state => state.user.loading2)
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.userAuth)
    useEffect(() => {
      dispatch(handleLoading2(true))
      axios.get(`http://localhost:5000/getAllMsg`)
        .then(res => {
          setMassage(res.data)
          dispatch(handleLoading2(false))
        })
    }, [])
  
    const deleteMassage = (id) => {
      if (window.confirm('Sure?')) {
        axios.post('http://localhost:5000/deleteMsg', { id })
          .then(res => {
            if (res.data.deletedCount > 0) {
              const restMassage = massages.filter(massage => massage._id !== id)
              setMassage(restMassage)
            }
          })
      }
    }
    return (
      <div className='row w-100'>
        {
          !loading && massages.length === 0 && <h3 className='text-center'>You Have No massages</h3>
        }
        {
          loading ?
            <div class="text-center text-primary">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div> :
            massages.map((massage) => <AllRequestItem deleteMassage={deleteMassage} item={massage}></AllRequestItem>)
        }
  
      </div>
    );
  };

export default AllRequest;