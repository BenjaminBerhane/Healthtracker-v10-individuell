import React from 'react'
import {Button, buttonVariants} from './ui/button'
import { Edit } from 'lucide-react';

function WeightListItem({weightData}) {

  return (
    <div className='border-b-1 p-2 flex gap-6 items-center justify-center'>
      <p className='text-sm text-gray-500'>{weightData.date}</p>
      <p className='text-lg font-bold flex items-center text-blue-800'>
        {weightData.weight}
        <span className='text-sm font-normal ml-1 text-black'>kg</span>
      </p>
      <Button className='ml-auto text-gray-500' size={"icon"} variant={"ghost"} aria-label="Edit">
        <Edit />
      </Button>
    </div>
  )
}
export default WeightListItem

