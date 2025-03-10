import React from 'react';

const MealListItem = ({ meal, onEdit }) => {
  return (
    <div className="meal-list-item" onClick={() => onEdit(meal)}>
      <h3>{meal.title}</h3>
      <p>Energi: {meal.energy} kcal</p>
      <p>Datum: {meal.date}</p>
      <p>Protein: {meal.protein}g</p>
      <p>Kolhydrat: {meal.carbohydrate}g</p>
      <p>Fett: {meal.fat}g</p>
      <p>Kategori: {meal.category}</p>
      <button onClick={(e) => { e.stopPropagation(); onEdit(meal); }}>Edit</button>
    </div>
  );
};

export default MealListItem;