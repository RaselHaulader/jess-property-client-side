import React, { useEffect, useRef, useState } from 'react';
import AllPropertyItem from '../AllProperties/AllPropertyItem';
import './AllPropertyPageStyle.css'
import axios from 'axios';
import Footer from '../Footer/Footer';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFilterValue } from '../../redux/slices/propertySlice';
const { Range } = Slider;

const AllPropertyPage = () => {
    const [items, setItems] = useState([])
    // const [filterData, setFilterData] = useState({ priceRange: [0, 10000000] })
    const [rangeValue, setRangeValue] = useState([0, 10000000])
    const [loading, setLoading] = useState(true)
    const categoryRef = useRef()
    const locationRef = useRef()
    const typeRef = useRef()
    const bannerFilterData = useSelector(state => state.properties.filterData)
    const dispatch = useDispatch()
    // range value
    const log = (e) => {
        setRangeValue([e[0] * 100000, e[1] * 100000]);
    }


    // send filter type to db
    const handleFilter = () => {
        dispatch(addFilterValue({}))
        const selectedFilterData = {
            priceRange: [...rangeValue]
        }
        categoryRef.current.value !== '' && (selectedFilterData.category = categoryRef.current.value)
        locationRef.current.value !== '' && (selectedFilterData.district = locationRef.current.value)
        typeRef.current.value !== '' && (selectedFilterData.PropertyType = typeRef.current.value)
        fetchResult(selectedFilterData)
    }
    useEffect(() => {
        console.log('hello1');
        let data = { priceRange: [...rangeValue] };
        if (bannerFilterData.PropertyType || bannerFilterData.district || bannerFilterData.PropertyType) {
            data = { ...data, ...bannerFilterData }
        }
        console.log(bannerFilterData)
        console.log(data)
        console.log('hello');
        fetchResult(data)

    }, [])

    useEffect(() => {
        window.addEventListener('storage', () => {
            window.alert('tetz')
        });
    }, [])
    // search data by filtered criteria
    const fetchResult = (filterData) => {
        window.scroll(0, 0)
        console.log(filterData);
        setLoading(true)
        axios.post('https://property-bazar-server.onrender.com/filter', filterData)
            .then(res => {
                console.log(res.data);
                setItems(res.data)
                setLoading(false)
            })
    }

    return (
        <div className='pt-5' style={{ maxWidth: '1200px', margin: 'auto' }}>

            <div className='row w-100 filter-section mt-5'>
                <div className='col-12 col-md-4 px-5 '>
                    <div>
                        <h3 className='p-0 m-0'>Filter</h3>
                        <hr />
                        <label htmlFor="">Category </label><br />
                        <select onChange={handleFilter} ref={categoryRef} className='w-100'>
                            <option value="">All Category</option>
                            <option value="For Sell">For Sell</option>
                            <option value="For Rent">For Rent</option>
                        </select>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Location</label><br />
                            <select onChange={handleFilter} ref={locationRef} className='w-100'>
                                <option value="">{bannerFilterData.district ? bannerFilterData.district : 'All Location'}</option>
                                <option value="Jashore">Jashore</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Jhenidah">Jhenidah</option>
                                <option value="Narail">Narail</option>
                                <option value="Magura">Magura</option>
                                <option value="Kustia">Kustia</option>
                                <option value="Meherpur">Meherpur</option>
                                <option value="Bagerhat">Bagerhat</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Property Type </label><br />
                        <select onChange={handleFilter} ref={typeRef} className='w-100'>
                            <option value="">{bannerFilterData.PropertyType ? bannerFilterData.PropertyType : 'All type'}</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Home">Home</option>
                            <option value="Land">Land</option>
                            <option value="Shop">Shop</option>
                            <option value="Office">Office</option>
                            <option value="Commercial">Commercial</option>
                        </select>
                    </div>
                    <div className='priceRange'>
                        <label htmlFor="" className='d-flex justify-content-between'>Price Range <span>{rangeValue[0] + ' - ' + rangeValue[1]} Tk</span></label> <br />
                        <div d-flex>

                            <Range
                                allowCross={true}
                                draggableTrack onChange={log}
                                defaultValue={[0, 100]}
                                trackStyle={[{ backgroundColor: 'tomato' }]}
                            />

                        </div>
                    </div>
                    <button onClick={handleFilter} className='w-100 my-3 applyFilter'>Apply Filter</button>
                </div>
                <div className='col-12 col-md-8 px-5 pt-0 mt-0 propertyPageItems'>
                    <div>
                        <p className='my-1 py-0'>Home &gt; <span className='text-danger'> Property List</span></p>
                    </div>
                    <h3 className='my-3 fw-bolder'>Properties {categoryRef?.current?.value ? categoryRef?.current?.value : ' '}</h3>
                    <div>
                        <div>
                            <label className='text-secondary' htmlFor="">Sort by :</label> <select>
                                <option>Newest</option>

                            </select>
                        </div>
                    </div>

                    {items.length === 0 && !loading && <h5 className='text-center my-5 text-danger'>No Result Found</h5>}
                    {loading ? <h5 className='text-center my-5 text-danger'>Loading...</h5> :
                        <div className='allPropertyPageProperties mt-3 mb-5'>
                            {items.map(item => <AllPropertyItem key={item._id} items={item} />)}
                        </div>}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllPropertyPage;