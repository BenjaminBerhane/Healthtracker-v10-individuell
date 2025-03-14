import React from 'react';
import MealListItem from './MealListItem';

const MealList = ({ meals = [], onEdit }) => {
  // Se till att meals är en array
  const sortedMeals = [...(meals || [])].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-4 text-center">Loggade måltider</h2>
      <div className="flex flex-wrap justify-center items-center -mx-2">
        {sortedMeals.map((meal, index) => (
          <li key={index}>
            <MealListItem meal={meal} onEdit={onEdit} editButton={1} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default MealList;