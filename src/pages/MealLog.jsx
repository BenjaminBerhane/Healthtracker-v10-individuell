import React, { useState } from 'react';

const MealLog = () => {
  const [meal, setMeal] = useState({
    title: '',
    energy: '',
    date: '',
    protein: '',
    carbohydrate: '',
    fat: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeal({
      ...meal,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(meal);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Titel:</label>
        <input type="text" name="title" value={meal.title} onChange={handleChange} />
      </div>
      <div>
        <label>Energi:</label>
        <input type="text" name="energy" value={meal.energy} onChange={handleChange} />
      </div>
      <div>
        <label>Datum:</label>
        <input type="text" name="date" value={meal.date} onChange={handleChange} />
      </div>
      <div>
        <label>Protein:</label>
        <input type="text" name="protein" value={meal.protein} onChange={handleChange} />
      </div>
      <div>
        <label>Kolhydrat:</label>
        <input type="text" name="carbohydrate" value={meal.carbohydrate} onChange={handleChange} />
      </div>
      <div>
        <label>Fett:</label>
        <input type="text" name="fat" value={meal.fat} onChange={handleChange} />
      </div>
      <div>
        <label>Kategori:</label>
        <input type="text" name="category" value={meal.category} onChange={handleChange} />
      </div>
      <button type="submit">Logga måltid</button>
    </form>
  );
};

export default MealLog;