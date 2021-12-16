import React from 'react';
import AddedTodays from '../AddedTodays/AddedTodays';
import AddPropertySection from '../AddPropertySection/AddPropertySection';
import AllProperties from '../AllProperties/AllProperties';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Category></Category>
            <AddedTodays></AddedTodays>
            <AddPropertySection></AddPropertySection>
            <AllProperties></AllProperties>

        </div>
    );
};

export default Home;