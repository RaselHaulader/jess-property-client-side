import React, { useState } from 'react';
import AllRequestItem from './AllRequestItem';

const AllRequest = () => {
    const [item, setItem] = useState({title:'Request item', price:'200'})
    return (
        <div>
           <AllRequestItem item={item}></AllRequestItem>
           <AllRequestItem item={item}></AllRequestItem>
           <AllRequestItem item={item}></AllRequestItem>
           <AllRequestItem item={item}></AllRequestItem>
        </div>
    );
};

export default AllRequest;