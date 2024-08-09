import React, { ReactNode } from 'react'
import { WobbleCard } from './ui/wobble-card'
import Image from 'next/image'

const CardInfo = ({ image, heading, info }) => {

    return (
        <div className='flex'>
            <WobbleCard className='w-[258px] h-[70px]' containerClassName="w-[258px] h-[80px] bg-[url('https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c7c3395fb43356a404b1a_stats-background.svg')]" >

                <div className="flex absolute top-0 left-0 p-1 gap-3">
                    <Image src={image} alt="stats" className='' width={70} height={62} />
                    <div className='flex flex-col justify-around'>
                        <h4 className='text-white'>{heading}</h4>
                        <p className='text-white'>{info}</p>
                    </div>
                </div>
            </WobbleCard>
        </div>
    )
}

export default CardInfo
