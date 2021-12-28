import React, { useState } from 'react';
import UserRequestItems from './UserRequestItems';

const UserRequest = () => {
    const [item, setItem] = useState({title:'Request item', price:'200'})
    return (
        <div>
          <UserRequestItems item={item}></UserRequestItems>
          <UserRequestItems item={item}></UserRequestItems>
          <UserRequestItems item={item}></UserRequestItems>
          <UserRequestItems item={item}></UserRequestItems>
          <UserRequestItems item={item}></UserRequestItems>
          <UserRequestItems item={item}></UserRequestItems>
          <UserRequestItems item={item}></UserRequestItems>
          <UserRequestItems item={item}></UserRequestItems>
          <UserRequestItems item={item}></UserRequestItems>
        </div>
    );
};

export default UserRequest;