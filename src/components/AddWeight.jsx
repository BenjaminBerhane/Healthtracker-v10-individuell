import React from 'react'
import { useState } from 'react'

const AddWeight = () => {

  const [newWeight, setNewWeight] = useState(''); 

  const handleAddWeight = () => {
    if (newWeight) {
      // kolla Pedrotech eller matchande repo för att se hur det gjordes där
      dispatch(setWeight(newWeight));
      setNewWeight('');
    }
  };

  return (
    <>
    <h3>Överskrift</h3>
    <input
      type="number"
      value={newWeight}
      onChange={(e) => setNewWeight(e.target.value)}
      placeholder="Ny vikt (kg)"
    />
    <button onClick={handleAddWeight}>Lägg till vikt</button>
    </>
  )
}

export default AddWeight