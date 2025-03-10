import React from 'react'
import {Button} from './ui/button'
import WeightListItem from './WeightListItem'

function WeightList({weightData}) {

  return (
    <>
        <div className='max-w-[300px] mx-auto'>WeightList
        <WeightListItem weightData={weightData}/>
        </div>
    </>
  )
}

export default WeightList