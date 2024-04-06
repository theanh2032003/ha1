// components/UserList/index.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchModel from '../../lib/fetchModelData';

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await fetchModel('/user/list');
      setUserList(usersData);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {userList.map(user => (
          <li key={user._id}>
            <Link to={`/users/${user._id}`}>
              {user.first_name} {user.last_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
