import React, { useState } from 'react';
import CurrentWeight from '../components/dashboard/CurrentWeight';
import AddWeight from '../components/AddWeight';

const Dashboard = () => {
  const [showAddWeight, setShowAddWeight] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <h1>Dashboard</h1>
      
      {showAddWeight ? (
        <AddWeight onSubmit={() => setShowAddWeight(false)} />
      ) : (
        <div onClick={() => setShowAddWeight(true)} className="cursor-pointer">
          <CurrentWeight />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
