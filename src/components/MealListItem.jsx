import React, { useState } from 'react';

const MealListItem = ({ meal, onEdit = () => {}, editButton = null }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <details className="bg-white shadow-md rounded p-4 mb-4 border-1 border-accent/30" onClick={toggleDetails}>
      <summary className="flex justify-between items-center cursor-pointer">
        <div>
          <h3 className="text-xl font-bold mb-2 text-accent text-left">{meal.title}</h3>
          <p className="text-gray-600">Energi: <span className="text-primary font-bold">{meal.energy}</span> kcal</p>
        </div>
        <span className="ml-2" style={{transform: `rotate(${showDetails ? 180 : 0}deg)`}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </summary>
      {showDetails && (
        <div className="flex flex-col items-start text-left">
          <p className={showDetails ? 'bg-secondary w-full' : ''}>Datum: <span className="text-accent font-light">{meal.date}</span></p>
          <p className="text-gray-600">Protein: <span className="text-primary font-bold">{meal.protein}</span> g</p>
          <p className={showDetails ? 'bg-secondary w-full' : ''}>Kolhydrat: <span className="text-primary font-bold">{meal.carbohydrate}</span> g</p>
          <p className="text-gray-600">Fett: <span className="text-primary font-bold">{meal.fat}</span> g</p>
          <p className={showDetails ? 'bg-secondary w-full' : ''}>Kategori: <span className="text-accent text-light">{meal.category}</span></p>
        </div>
      )}
      { editButton &&
      <button
        className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ml-2"
        onClick={(e) => { e.stopPropagation(); onEdit(meal); }}>
        Edit
      </button>
      }
    </details>
  );
};

export default MealListItem;