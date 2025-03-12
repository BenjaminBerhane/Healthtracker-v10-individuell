import React, { useState } from 'react';
import CurrentWeight from '../components/dashboard/CurrentWeight';
import AddWeight from '../components/AddWeight';
import TodaysMeals from '../components/dashboard/TodaysMeals';
import KcalStatus from '../components/dashboard/KcalStatus';

const Dashboard = () => {
  const [showAddWeight, setShowAddWeight] = useState(false);

  return (
    <main>
      <div className="flex flex-wrap items-start max-w-screen">
        <KcalStatus />
        <TodaysMeals />
        
        {showAddWeight ? (
          <AddWeight onSubmit={() => setShowAddWeight(false)} />
        ) : (
          <div className="h-fit w-fit cursor-pointer" onClick={() => setShowAddWeight(true)}>
            <CurrentWeight />
          </div>
        )}

      </div>
    </main>
  );
};

export default Dashboard;
