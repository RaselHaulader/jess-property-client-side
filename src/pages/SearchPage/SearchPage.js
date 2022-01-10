import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProperty } from '../../redux/slices/propertySlice';
import AllPropertyItem from '../AllProperties/AllPropertyItem';
import './SearchPage.css';

const SearchPage = () => {
    const [properties, setProperties] = useState([])
    const [load, setLoad] = useState(false)
    const searchKeyword = useSelector(state => state.properties.searchProperties)

    const dispatch = useDispatch()
    useEffect(() => {
        setLoad(true)
        axios.post('https://secret-basin-56489.herokuapp.com/serachProperties', { searchKeyword })
            .then(res => {
                setProperties(res.data);
                setLoad(false)
            })
        console.log(searchKeyword);

    }, [searchKeyword])
    useEffect(() => {
        return () => {
            dispatch(addProperty(''))
            console.log('hello');
        }
    }, [])
    return (
        <div className='pt-4'>
            <div className='mt-5'>
                {load ? <h3 className='text-center'>Searching...</h3> :
                    <div className='propertiesResults px-4'>
                        {properties.map(item => <AllPropertyItem key={item._id} items={item} />)}
                    </div>}
            </div>
        </div>
    );
};

export default SearchPage;