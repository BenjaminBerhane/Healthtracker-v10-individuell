import React from 'react'
import {Button, buttonVariants} from './ui/button'

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
        <div key={weight.id}>
            <p>{weight.weight} kg, {weight.date}</p>
        </div>
    ))}
    <div>WeightListItem</div>
    <Button>Edit</Button>
</>
  )
}
export default WeightListItem
