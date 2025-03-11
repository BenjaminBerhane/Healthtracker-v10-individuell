import React, { useState } from 'react';
import MealList from '../components/MealList';
import '../pages/MealLog.css';

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

  const [mealLogs, setMealLogs] = useState([]);
  const [editingMeal, setEditingMeal] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeal({
      ...meal,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // kolla att alla fält är ifyllda
    if (!meal.title || !meal.energy || !meal.date || !meal.protein || !meal.carbohydrate || !meal.fat || !meal.category) {
      setError('Alla fält måste fyllas i.');
      return;
    }
    setError('');
    if (editingMeal) {
      setMealLogs(mealLogs.map(m => (m === editingMeal ? meal : m)));
      setEditingMeal(null);
    } else {
      setMealLogs([...mealLogs, meal]);
    }
    setMeal({
      title: '',
      energy: '',
      date: '',
      protein: '',
      carbohydrate: '',
      fat: '',
      category: ''
    });
  };

  const handleEdit = (meal) => {
    setMeal(meal);
    setEditingMeal(meal);
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Titel:</label>
          <input type="text" name="title" value={meal.title} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Energi:</label>
          <input type="text" name="energy" value={meal.energy} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Datum:</label>
          <input type="text" name="date" value={meal.date} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Protein:</label>
          <input type="text" name="protein" value={meal.protein} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Kolhydrat:</label>
          <input type="text" name="carbohydrate" value={meal.carbohydrate} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Fett:</label>
          <input type="text" name="fat" value={meal.fat} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Kategori:</label>
          <input type="text" name="category" value={meal.category} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {editingMeal ? 'Uppdatera måltid' : 'Logga måltid'}
        </button>
      </form>

      <MealList meals={mealLogs} onEdit={handleEdit} />
    </div>
  );
};

export default MealLog;