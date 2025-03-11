import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addWeight } from '../reducers/profileSlice'

const AddWeight = () => {

  const [newWeight, setNewWeight] = useState(''); 
  const dispatch = useDispatch();

  const handleAddWeight = () => {

    if (newWeight) {
      const today = new Date(); // Hämta dagens datum
      const formattedDate = today.toISOString().split('T')[0]; // Formatera datumet till 'YYYY-MM-DD'

      dispatch(addWeight({
        weight: parseFloat(newWeight),
        date: formattedDate, // Lägg till datumet i vikten
      }));
      setNewWeight('');
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6 mt-4 fixed-width">
    <h3 className="text-xl font-bold text-green-600 mb-4">Lägg till ny vikt</h3>
    <input
      type="number"
      value={newWeight}
      onChange={(e) => setNewWeight(e.target.value)}
      placeholder="Ny vikt (kg)"
      className="block w-full border rounded p-2 mb-4"
    />
    <button onClick={handleAddWeight} className="w-full bg-green-600 text-white rounded py-2 hover:bg-green-700 transition duration-200">Lägg till vikt</button>
    </div>
  )
}

export default AddWeight