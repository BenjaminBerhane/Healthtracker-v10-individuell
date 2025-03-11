import React from 'react'
import {Button} from './ui/button'
import WeightListItem from './WeightListItem'

function WeightList({weightData}) {

  return (
    <div className='max-w-[300px] mx-auto'>
      <h3 className='text-lg font-bold text-gray-700 mb-4'>Weight List</h3>
      {weightData.length > 0 ? (
        weightData.map((weight) => (
          <WeightListItem key={weight.id} weightData={weight} />
        ))
      ) : (
        <p className='text-gray-500'>Ingen vikt registrerad.</p>
      )}
    </div>
  )
}

export default WeightList