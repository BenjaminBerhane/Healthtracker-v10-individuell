import React from 'react';
import MealListItem from './MealListItem';

const MealList = ({ meals = [], onEdit }) => {
  // Se till att meals är en array
  const sortedMeals = [...(meals || [])].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="card">
      <h2>Loggade måltider</h2>
      <ul>
        {sortedMeals.map((meal, index) => (
          <li key={index}>
            <MealListItem meal={meal} onEdit={onEdit} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealList;