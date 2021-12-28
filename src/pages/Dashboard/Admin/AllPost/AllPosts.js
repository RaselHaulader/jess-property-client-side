import React, { useState } from 'react';
import AllPostItem from './AllPostItem';

const AllPosts = () => {
    const [item, setItem] = useState({title:'Property item', price:'200'})
    return (
        <div>
             <AllPostItem item={item}></AllPostItem>
             <AllPostItem item={item}></AllPostItem>
             <AllPostItem item={item}></AllPostItem>
             <AllPostItem item={item}></AllPostItem>
        </div>
    );
};

export default AllPosts;