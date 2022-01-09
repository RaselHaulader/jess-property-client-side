import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddedTodays from '../AddedTodays/AddedTodays';
import AddPropertySection from '../AddPropertySection/AddPropertySection';
import AllProperties from '../AllProperties/AllProperties';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    const user = useSelector(state => state.user.userAuth)
    const loading = useSelector(state => state.user.loading)

    const navigate = useNavigate()
    useEffect(() => {
        console.log('hello');
       if (loading) {
        navigate('/allProperty')
       }
    }, [loading])
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <AllProperties></AllProperties>
            <AddPropertySection></AddPropertySection>
            <AddedTodays></AddedTodays>
            <Footer></Footer>
        </div>
    );
};

export default Home;