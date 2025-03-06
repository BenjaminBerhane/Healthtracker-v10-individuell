import React, { useState } from 'react';

const Profile = () => {
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [activityLevel, setActivityLevel] = useState(1.2);
  const [tdee, setTdee] = useState(null);

  const calculateTDEE = (e) => {
    e.preventDefault();
    
    let bmr;
    if (gender === 'male') {
      bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else if (gender === 'female') {
      bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }

    const totalEnergyExpenditure = bmr * activityLevel;
    setTdee(totalEnergyExpenditure);
  };

  return (
    <form onSubmit={calculateTDEE}>
      <h1>Profile</h1>
      <label>
        <input type="radio" name='gender' value='male' onChange={() => setGender('male')} required />
        Male
      </label><br />
      <label>
        <input type="radio" name='gender' value='female' onChange={() => setGender('female')} required />
        Female
      </label><br />

      <label htmlFor="weight">Weight (kg):</label>
      <input type="number" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />

      <label htmlFor="height">Height (cm):</label>
      <input type="number" name="height" value={height} onChange={(e) => setHeight(e.target.value)} required />

      <label htmlFor="age">Age (years):</label>
      <input type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)} required />

      <label htmlFor="activity-level">Activity Level:</label>
      <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
        <option value={1.2}>Stillasittande (1.2)</option>
        <option value={1.375}>Lätt aktiv (1.375)</option>
        <option value={1.55}>Måttligt aktiv (1.55)</option>
        <option value={1.725}>Mycket aktiv (1.725)</option>
        <option value={1.9}>Elit/idrottare (1.9)</option>
      </select>

      <button type="submit">Submit</button>

      {tdee && <h2>Ditt totala dagliga energibehov (TDEE): {tdee.toFixed(2)} kcal</h2>}
    </form>
  );
}

export default Profile;