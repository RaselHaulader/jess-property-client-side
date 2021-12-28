import React, { useState } from 'react';
import AllWishListItem from './AllWishListItem';

const AllWishList = () => {
    const [item, setItem] = useState({title:'Wish item', price:'200'})
    return (
        <div>
          <AllWishListItem item={item}/>
          <AllWishListItem item={item}/>
          <AllWishListItem item={item}/>
          <AllWishListItem item={item}/>
          <AllWishListItem item={item}/>
        </div>
    );
};

export default AllWishList;