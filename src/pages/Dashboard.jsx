import React, { useState } from 'react';
import CurrentWeight from '../components/dashboard/CurrentWeight';
import AddWeight from '../components/AddWeight';
import TodaysMeals from '../components/dashboard/TodaysMeals';
import KcalStatus from '../components/dashboard/KcalStatus';
import WelcomeProfile from '@/components/dashboard/WelcomeProfile';
import EnergyPieChart from '../components/EnergyPieChart';
import WeightProgressChart from "../components/dashboard/WeightProgressChart";
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const [showAddWeight, setShowAddWeight] = useState(false);
  const energyData = [50, 30, 20];
  const weightHistory = useSelector((state) => state.profile.weight) || [];

  const formattedWeightData = weightHistory.map((entry) => ({
    date: entry.date,
    weight: entry.weight,
  }));

  return (
    <main className='flex justify-center items-start px-2 md:px-8'>
   
        <div className="flex flex-col gap-4 md:gap-8 md:col-span-2">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="w-full md:w-1/2">
                <WelcomeProfile />
              </div>
            <div className="flex flex-col gap-4 md:gap-8 flex-1">
              <KcalStatus />
              <div className="m-0 cursor-pointer w-fit h-fit" onClick={() => setShowAddWeight(true)}>
                {showAddWeight ? (
                  <AddWeight onSubmit={() => setShowAddWeight(false)} />
                ) : (
                  <CurrentWeight />
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <section className="max-w-[600px]">
              <WeightProgressChart weightData={formattedWeightData} />
            </section>
            <section className="card">
              <EnergyPieChart energyData={energyData} />
            </section>
          </div>
        </div>
        <div className="lg:col-span-1 md:col-span-2 justify-self-end sm:justify-self-center">
          <TodaysMeals />
        </div>
     
    </main>
  );
};

export default Dashboard;