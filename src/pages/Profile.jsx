import React from 'react';
import WeightList from '../components/WeightList';

function Profile() {
  console.log("Profile component is rendering"); // Add this
  const weightArr = [
    {
        id: 1,
        weight: 100,
        date: "2023-01-01"
    },
    {
        id: 2,
        weight: 102,
        date: "2023-01-12"
    }
]
  return (
    <main>
      <div>Profile</div>
      <WeightList weightData={weightArr} />
    </main>
  );
}

export default Profile;
