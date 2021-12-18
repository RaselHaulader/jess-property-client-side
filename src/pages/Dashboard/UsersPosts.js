import React, { useState } from 'react';
import UsersPostItem from './UsersPostItem';

const UsersPosts = () => {
    const [item, setItem] = useState({title:'Property item', price:'200'})
    return (
        <div>
           <div className='items-container'>
               <UsersPostItem item={item}></UsersPostItem>
               <UsersPostItem item={item}></UsersPostItem>
               <UsersPostItem item={item}></UsersPostItem>
               <UsersPostItem item={item}></UsersPostItem>
               <UsersPostItem item={item}></UsersPostItem>
           </div>
        </div>
    );
};

export default UsersPosts;