import React, { useState } from 'react';
import MealList from '../components/MealList';
import { useSelector, useDispatch } from "react-redux";
import { addMeal, updateMeal } from "../reducers/mealSlice";
import { v4 as uuidv4 } from "uuid";

const MealLog = () => {

  const dispatch = useDispatch();
  const mealLogs = useSelector((state) => state.meals?.mealLogs ?? []);


  const [meal, setMeal] = useState({
    title: '',
    energy: '',
    date: '',
    protein: '',
    carbohydrate: '',
    fat: '',
    category: ''
  });

  const [editingMeal, setEditingMeal] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeal({
      ...meal,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingMeal) {
      dispatch(updateMeal(meal));
      setEditingMeal(null);
    } else {
      dispatch(addMeal({ ...meal, id: uuidv4() }));
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
    <div>
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
        <button type="submit">{editingMeal ? 'Uppdatera måltid' : 'Logga måltid'}</button>
      </form>

      <MealList meals={mealLogs} onEdit={handleEdit} />
    </div>
  );
};

export default MealLog;