import React from "react";

const Profile = ({ logout, user, fetchData }) => {
  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      <button>Get protected</button>
    </div>
  );
};

export default Profile;
