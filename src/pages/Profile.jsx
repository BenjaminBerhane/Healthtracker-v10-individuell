import React from 'react';
import WeightList from '../components/WeightList';

function Profile() {
  console.log("Profile component is rendering"); // Add this
  return (
    <main>
      <div>Profile</div>
      <WeightList />
    </main>
  );
}

export default Profile;
