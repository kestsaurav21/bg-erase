import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='w-full h-20 bg-black flex justify-around'>
        <div className='flex items-center gap-8'>
            <img src={assets.logo_icon} alt="" />

            <p className='text-white text-xl font-bold'>
            All right reserved. Copyright @bg lift
            </p>
        </div>
    </div>
  )
}

export default Footer