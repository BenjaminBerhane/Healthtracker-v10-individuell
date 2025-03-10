import React from 'react'
import {Button, buttonVariants} from './ui/button'
import { Edit } from 'lucide-react';

function WeightListItem() {
    const weightArr = [
        {
            id: 1,
            weight: 100,
            date: "2023-01-01"
        },
        {
            id: 2,
            weight: 102,
            date: "2023-01-12"
        }
    ]

    const weightData = weightArr;
  return (
    <>
    {weightData.map((weight) => (
        <div className='border-b-1 p-2 flex gap-6 items-center justify-center' key={weight.id}>
            <p className='text-sm text-gray-500'>{weight.date}</p>
            <p className='text-lg font-bold flex items-center text-blue-800'>
              {weight.weight}
              <span className='text-sm font-normal ml-1 text-black'>kg</span>
            </p>
        <Button className='ml-auto text-gray-500' size={"icon"} variant={"ghost"} aria-label="Edit">
            <Edit />
        </Button>
        </div>
    ))}
    
</>
  )
}
export default WeightListItem
