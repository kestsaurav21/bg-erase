import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='w-full p-10 bg-black flex justify-around py-18 '>
        <div className='flex items-center gap-8 justify-around'>
            <img src={assets.logo_icon} alt="" />

            <p className='text-white text-xl font-bold'>
            All right reserved. Copyright @bg lift
            </p>
            <div className='flex'>
                <img className='cursor-pointer w-16' src={assets.facebook_icon} alt="" />
                <img className='cursor-pointer w-16' src={assets.twitter_icon} alt="" />
                <img className='cursor-pointer w-16' src={assets.google_plus_icon} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Footer