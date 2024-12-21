import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserCard.css';

const UserCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => {
        setUser(response.data.results[0]);
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="card">
      <img
        className="card-image"
        src={user.picture.large}
        alt={`${user.name.title} ${user.name.first} ${user.name.last}`}
      />
      <div className="card-details">
        <h2 className="card-name">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
        <p className="card-gender"> &#9792; {user.gender}</p>
        <p className="card-email">📧 {user.email}</p>
        <p className="card-phone">📞 {user.phone}</p>
        <p className="card-location">📍 {`${user.location.city}, ${user.location.country}`}</p>
      </div>
    </div>
  );
};

export default UserCard;
