import React, { useState } from 'react';
import UsersWishListItem from './UsersWishListItem';


const UsersWishList = () => {
    const [item, setItem] = useState({title:'Wish item', price:'200'})
    return (
        <div>
            <UsersWishListItem item={item}></UsersWishListItem>
            <UsersWishListItem item={item}></UsersWishListItem>
            <UsersWishListItem item={item}></UsersWishListItem>
            <UsersWishListItem item={item}></UsersWishListItem>
        </div>
    );
};

export default UsersWishList;