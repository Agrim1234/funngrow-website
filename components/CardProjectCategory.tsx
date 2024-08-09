import React from 'react'

const CardProjectCategory = ({image, heading}) => {
  return (
    <div className='flex flex-col bg-[#121e2c] h-[234px] w-[224px] items-center justify-center gap-7 rounded-lg'>
      <img src={image} alt={heading} width={60} height={60}/>
      <h4 className='text-white'>{heading}</h4>
    </div>
  )
}

export default CardProjectCategory
