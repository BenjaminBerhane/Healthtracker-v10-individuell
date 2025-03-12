import React from 'react';
import { useSelector } from 'react-redux';
import MealList from '../MealList';
import { Button } from '../ui/button';
import { PlusCircle } from 'lucide-react';

const TodaysMeals = () => {
  /* const meals = useSelector((state) => state.meals.list || []); // Ensure meals is always an array */
  const meals = [
    { date: '2025-03-11', title: 'Breakfast' },
    { date: '2025-03-10', title: 'Lunch' }
  ]; // Example meal data

  const todaysDate = new Date();
  const formattedDate = `${todaysDate.getFullYear()}-${String(todaysDate.getMonth() + 1).padStart(2, '0')}-${String(todaysDate.getDate()).padStart(2, '0')}`;

  const todaysMeals = meals.filter((meal) => meal.date === formattedDate);

  return (
    <section className='card'>
      <h3 className='text-lg font-bold'>Idag </h3>
      <p className='text-sm text-gray-500'>{formattedDate}</p>
     { todaysMeals.length === 0 
     && <p className='text-sm text-gray-500 card'>Inga måltider registrerade idag.</p>}
     {todaysMeals.length !== 0 
     && <MealList meals={todaysMeals} />
      }
      <Button onClick={() => { window.location.href = '/mealLog' }}>
        <PlusCircle className="inline-block" />
        Lägg till måltid
      </Button>
    </section>
  );
};

export default TodaysMeals;
