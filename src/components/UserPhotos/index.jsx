// components/UserPhotos/index.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchModel from '../../lib/fetchModelData';

const UserPhotos = ({ match }) => {
  const [photos, setPhotos] = useState([]);
  const { userId } = match.params;

  useEffect(() => {
    const fetchPhotos = async () => {
      const photosData = await fetchModel(`/photosOfUser/${userId}`);
      setPhotos(photosData);
    };
    fetchPhotos();
  }, [userId]);

  return (
    <div>
      <h2>User Photos</h2>
      {photos.map(photo => (
        <div key={photo._id}>
          <img src={`images/${photo.file_name}`} alt="user_photo" />
          <p>Date/Time: {new Date(photo.date_time).toLocaleString()}</p>
          <p>Comments:</p>
          <ul>
            {photo.comments.map(comment => (
              <li key={comment._id}>
                <p>Date/Time: {new Date(comment.date_time).toLocaleString()}</p>
                <p>User: <Link to={`/users/${comment.user._id}`}>{comment.user.first_name} {comment.user.last_name}</Link></p>
                <p>Comment: {comment.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserPhotos;
