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
            <Banner></Banner>
            <Category></Category>
            <AllProperties></AllProperties>
            <AddPropertySection></AddPropertySection>
            <AddedTodays></AddedTodays>
           

        </div>
    );
};

export default Home;