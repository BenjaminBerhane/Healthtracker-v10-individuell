import React, { useState } from 'react';
import CurrentWeight from '../components/dashboard/CurrentWeight';
import AddWeight from '../components/AddWeight';
import TodaysMeals from '../components/dashboard/TodaysMeals';
import KcalStatus from '../components/dashboard/KcalStatus';
import WelcomeProfile from '@/components/dashboard/WelcomeProfile';

const Dashboard = () => {
  const [showAddWeight, setShowAddWeight] = useState(false);

  return (
    <main className='flex flex-col items-center'>
      <div className="max-w-[800px] p-4 flex flex-wrap items-start">
        <div className="w-full flex items-start">
          <WelcomeProfile className="flex-10 w-full"/>
          <KcalStatus />
        </div>
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
