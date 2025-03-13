import React, { useState } from 'react';
import CurrentWeight from '../components/dashboard/CurrentWeight';
import AddWeight from '../components/AddWeight';
import TodaysMeals from '../components/dashboard/TodaysMeals';
import KcalStatus from '../components/dashboard/KcalStatus';
import WelcomeProfile from '@/components/dashboard/WelcomeProfile';

const Dashboard = () => {
  const [showAddWeight, setShowAddWeight] = useState(false);

  return (
    <main className='flex justify-center'>
      <div className='grid grid-cols-2 gap-4 items-start max-w-[800px] p-4'>
        <div className="col-span-1">
          <WelcomeProfile className=""/>
          <KcalStatus />
          {showAddWeight ? (
            <AddWeight onSubmit={() => setShowAddWeight(false)} />
          ) : (
            <div className="h-fit w-fit cursor-pointer" onClick={() => setShowAddWeight(true)}>
              <CurrentWeight />
            </div>
          )}
        </div>
        <div className="col-span-1">
          <TodaysMeals />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;


