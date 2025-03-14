import React, { useState } from 'react';
import CurrentWeight from '../components/dashboard/CurrentWeight';
import AddWeight from '../components/AddWeight';
import TodaysMeals from '../components/dashboard/TodaysMeals';
import KcalStatus from '../components/dashboard/KcalStatus';
import EnergyPieChart from '../components/EnergyPieChart';

const Dashboard = () => {
  const [showAddWeight, setShowAddWeight] = useState(false);
  const energyData = [50, 30, 20]; // Exempeldata: 50% kolhydrater, 30% fett, 20% protein

  return (
    <main className='flex flex-col align-center'>
      <div className="max-w- [800px] p-4 flex flex-wrap items-start max-w-screen">
        <KcalStatus />
        <TodaysMeals />
        
        {showAddWeight ? (
          <AddWeight onSubmit={() => setShowAddWeight(false)} />
        ) : (
          <div className="h-fit w-fit cursor-pointer" onClick={() => setShowAddWeight(true)}>
            <CurrentWeight />
          </div>
        )}

        <EnergyPieChart energyData={energyData} />

      </div>
    </main>
  );
};

export default Dashboard;
