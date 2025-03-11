import React from 'react';
import { useSelector } from 'react-redux';
import MealList from '../MealList';
import {Button} from '../ui/button';

const TodaysMeals = () => {
  /* const meals = useSelector((state) => state.meals.list || []); // Ensure meals is always an array */
  const meals = [
    { date: '2025-03-11', title: 'Breakfast' },
    { date: '2025-03-11', title: 'Lunch' }
  ]; // Example meal data

  const todaysDate = new Date();
  const formattedDate = `${todaysDate.getFullYear()}-${String(todaysDate.getMonth() + 1).padStart(2, '0')}-${String(todaysDate.getDate()).padStart(2, '0')}`;

  return (
    <section className='card'>
      <h3 className='text-lg font-bold'>Idag </h3>
      <p className='text-sm text-gray-500'>{formattedDate}</p>
      <MealList meals={meals} />
      <Button onClick={() => { window.location.href = '/mealLog' }}>Lägg till måltid</Button>
    </section>
  );
};

export default TodaysMeals;
