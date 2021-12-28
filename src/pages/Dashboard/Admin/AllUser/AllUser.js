import React from 'react';
import AllUserItem from './AllUserItem';

const AllUser = () => {
    const item = {
        name:'Md Rasel haulader',
         usersPost:1,
          UsersRequest:3,
          UsersWish :4
    }
    return (
        <div>
            <AllUserItem item={item}/>
            <AllUserItem item={item}/>
            <AllUserItem item={item}/>
            <AllUserItem item={item}/>
        </div>
    );
};

export default AllUser;