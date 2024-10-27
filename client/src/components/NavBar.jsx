import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';




const NavBar = () => {

  const { openSignIn } = useClerk();

  const { isSignedIn , user } = useUser();

  return (
    <div className='bg-black p-3 flex items-center justify-around  '>
      <Link to="/" >  
      <img className='w-26 sm:w-70' src={assets.logo_icon} />
      </Link>
      {
        isSignedIn ? 
        <div>
            <UserButton />
        </div>
        :
        <button onClick={() => {openSignIn({})}} className=' flex items-center justify-center gap-4 px-4 py-2 border-2 rounded-full text-xl text-white sm:px-8  sm:py-3 sm:text-md cursor-pointer' >
        Get Started 
        <img className="w-3 sm:w-4" src={assets.arrow_icon} />
        </button>
      }

      
    </div>
  )
}

export default NavBar;