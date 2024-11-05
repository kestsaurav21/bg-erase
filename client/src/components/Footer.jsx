// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div className='w-full p-3 bg-black flex justify-around py-18 '>
//         <div className='flex items-center gap-8 justify-around'>
//             <img src={assets.logo_icon} alt="" />

//             <p className='text-white text-xl font-bold'>
//             All right reserved. Copyright @bg erase
//             </p>
//             <div className='flex lg:flex-row'>
//                 <img className='cursor-pointer w-16' src={assets.facebook_icon} alt="" />
//                 <img className='cursor-pointer w-16' src={assets.twitter_icon} alt="" />
//                 <img className='cursor-pointer w-16' src={assets.google_plus_icon} alt="" />
//             </div>

//         </div>
//     </div>
//   )
// }

// export default Footer



import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className='w-full p-4 bg-black flex flex-col md:flex-row items-center justify-between py-8'>
      <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8'>
        <img src={assets.logo_icon} alt="Company Logo" className="w-12 md:w-16" />

        <p className='text-white text-center md:text-left text-sm md:text-base lg:text-xl font-bold'>
          All rights reserved. © 2023 BG-Erase
        </p>
      </div>

      <div className='flex gap-4 mt-4 md:mt-0'>
        <img className='cursor-pointer w-6 md:w-8 lg:w-10' src={assets.facebook_icon} alt="Facebook" />
        <img className='cursor-pointer w-6 md:w-8 lg:w-10' src={assets.twitter_icon} alt="Twitter" />
        <img className='cursor-pointer w-6 md:w-8 lg:w-10' src={assets.google_plus_icon} alt="Google Plus" />
      </div>
    </footer>
  );
};

export default Footer;
