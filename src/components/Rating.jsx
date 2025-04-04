import React, { useState } from 'react'
import { GoStarFill,GoStar } from "react-icons/go";

const Rating = ({filters,setFilters}) => {
   const[rate,setRate]= useState(5)
   const updateRating=(rating)=>{
    setFilters((prevFilter)=>{
        return {
            ...prevFilter,
            rating
        }
    })
   }
   const RatingComponent = ()=>{
    const totalStart = 5

    return (
        <div className="flex items-center gap-2 ">
                                <span>Rating</span>

<p className='flex'>
{[...Array(totalStart)].map((_,index)=>{
                return(
                    <>
                    {index < filters.rating ? (
                        <GoStarFill key={index} className="text-yellow-500" onClick={()=>updateRating(index+1)}/>
                    ) : (
                        <GoStar key={index} className="text-gray-400" onClick={()=>updateRating(index+1)}/>
                    )}
                    </>
                )
            })}
</p>
        </div>
    )

}

  return (
    <div>
      <RatingComponent/>    
    </div>
  )
}

export default Rating
