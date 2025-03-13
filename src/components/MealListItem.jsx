import React, { useState } from 'react';

const MealListItem = ({ meal, onEdit }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="bg-white shadow-md rounded p-4 mb-4 cursor-pointer hover:bg-gray-100 flex-1 mx-2">
      <h3 className="text-xl font-bold mb-2">{meal.title}</h3>
      <p className="text-gray-700">Energi: {meal.energy} kcal</p>
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
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        onClick={toggleDetails}
      >
        {showDetails ? 'Visa mindre' : 'Mer info'}
      </button>
      <button
        className="mt-3 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ml-2"
        onClick={(e) => { e.stopPropagation(); onEdit(meal); }}
      >
        Edit
      </button>
    </div>
  );
};

export default MealListItem;