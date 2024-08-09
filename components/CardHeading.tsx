import React, { PropsWithRef } from 'react'
import { PropsWithChildren } from 'react'

const CardHeading = ({heading}) => {
  return (
    <div className='flex text-white justify-center items-center h-full w-full p-3 rounded-lg'>
      <h2>{heading}</h2>
    </div>
  )
}

export default CardHeading
