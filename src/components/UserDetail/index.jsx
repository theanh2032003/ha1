// components/UserDetail/index.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchModel from '../../lib/fetchModelData';

const UserDetail = ({ match }) => {
  const [user, setUser] = useState(null);
  const { userId } = match.params;

  useEffect(() => {
    const fetchUserDetail = async () => {
      const userData = await fetchModel(`/user/${userId}`);
      setUser(userData);
    };
    fetchUserDetail();
  }, [userId]);

  return (
    <div>
      <h2>User Detail</h2>
      {user && (
        <div>
          <p>Name: {user.first_name} {user.last_name}</p>
          <p>Location: {user.location}</p>
          <p>Description: {user.description}</p>
          <p>Occupation: {user.occupation}</p>
          <Link to={`/photos/${userId}`}>View Photos</Link>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
