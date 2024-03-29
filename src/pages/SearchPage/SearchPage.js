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
    const searchKeyword = useSelector(state => state.properties.searchedProperties)

    const dispatch = useDispatch()
    useEffect(() => {
        setLoad(true)
        axios.post('https://property-bazar-server.onrender.com/serachProperties', { searchKeyword })
            .then(res => {
                setProperties(res.data);
                setLoad(false)
            })
        console.log(searchKeyword);

    }, [searchKeyword])
    useEffect(() => {
        return () => {
            dispatch(addProperty(''))
        }
    }, [])
    return (
        <div className='pt-5'>
            <div className='mt-5 mx-3'>
                {load ? <h4 className='text-center text-danger'>Searching...</h4> :
                    <div className='propertiesResults px-4'>
                        {properties.map(item => <AllPropertyItem key={item._id} items={item} />)}
                    </div>}
            </div>
        </div>
    );
};

export default SearchPage;