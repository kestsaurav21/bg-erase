import React, { useContext, useEffect } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../context/AppContext';




const NavBar = () => {

  const { openSignIn } = useClerk();

  const { isSignedIn , user } = useUser();

  const { credit, loadCreditsData } = useContext(AppContext)

  useEffect(()=> {
    if(isSignedIn){
      loadCreditsData();
    }
  }, [isSignedIn])

  return (
    <div className='bg-black p-3 flex items-center justify-around  '>
      <Link to="/" >  
      <img className='w-26 sm:w-70' src={assets.logo_icon} />
      </Link>
      {
        isSignedIn ? 
        <div className='flex items-center gap-2 sm:gap-3'>
            <button className='flex items-center gap-2 sm:gap-3 bg-orange-600 px-4 py-2 sm:px-7 rounded-full hover:scale-105 transition-all duration-700'>
              <img className='w-5' src={assets.credit_icon} />
              <p className='text-white text-sm'>Credits: {credit}</p>
            </button>

            <p className='text-white text-sm max-sm:hidden'>Hi! {user.firstName}</p>
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