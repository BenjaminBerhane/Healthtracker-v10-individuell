import React from 'react';
import { useSelector } from 'react-redux';


const KcalStatus = () => {
/*   const tdee = useSelector(selectTDEE);
  const consumedCalories = useSelector(selectTodayCalories); */
/*   const remainingKcal = tdee - consumedCalories; // Calculate remaining kcal */

  return (
    <section className='card'>
      <h3>Kalorier kvar idag</h3>
     {/*  <p>{remainingKcal} kcal</p> */}
    </section>
  );
};

export default KcalStatus;
