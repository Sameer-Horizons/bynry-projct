import React from 'react';

const ProfileDetail = ({ profile }) => {
  return (
    <div>
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
    </div>
  );
};

export default ProfileDetail;
