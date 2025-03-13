import React, { useState } from 'react';
import '../pages/MealLog.css';

const MealListItem = ({ meal, onEdit }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <details className="bg-white shadow-md rounded p-4 mb-4" onClick={toggleDetails}>
      <summary className="flex justify-between items-center cursor-pointer">
        <div>
          <h3 className="text-xl font-bold mb-2">{meal.title}</h3>
          <p className="text-gray-700">Energi: {meal.energy} kcal</p>
        </div>
        <span className="ml-2" style={{transform: `rotate(${showDetails ? 90 : 0}deg)`}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </summary>
      {showDetails && (
        <>
          <p className="text-gray-700">Datum: {meal.date}</p>
          <p className="text-gray-700">Protein: {meal.protein}g</p>
          <p className="text-gray-700">Kolhydrat: {meal.carbohydrate}g</p>
          <p className="text-gray-700">Fett: {meal.fat}g</p>
          <p className="text-gray-700">Kategori: {meal.category}</p>
        </>
      )}
      <button
        className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ml-2"
        onClick={(e) => { e.stopPropagation(); onEdit(meal); }}>
        Edit
      </button>
    </details>
  );
};

export default MealListItem;