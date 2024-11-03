import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import axios from 'axios'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

const BuyCredit = () => {

    const { backendUrl, loadCreditsData } = useContext(AppContext);
    
    const navigate = useNavigate(); 

    const { getToken } = useAuth();

    const initPay = async (order) => {

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        order: 'Credits Payment',
        description: "Credits Payment",
        order_id: order.id,
        receipt: order.receipt,
        handler: async (response) => {
            // console.log(response);
        }
      }

      const rzp = new window.Razorpay(options);
      rzp.open()

    }

    const paymentRazorpay = async(planId) => {
        try {

          const token = await getToken();

          const { data } = await axios.post(backendUrl + '/api/user/pay-razor', {planId}, 
            {headers: {token}}
          )
          
          if(data.success){
            initPay(data.order)
          }
  
        } catch (error) {
          console.log(error);
          toast.error(error.message) 
        }
    }

  return (
    <div className='min-h-[77vh] text-center pt-14 mb-10'>

      <button className='border-2 border-gray-900 px-10 py-3 rounded-full mb-6'>Our Plans</button>

      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-8 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-6 sm:mb-10'>Choose the plan that’s right for you</h1>

      <div className='flex flex-wrap justify-center gap-10 text-left'>
        {plans.map((item, index) => (
          <div className='bg-white drop-shadow-md border rounded-lg py-12 px-8 text-gray-700 gap-10 hover:scale-105 transition-all duration-500'
          key={index}>
            <img className='w-12' src={assets.logo_icon}  />
            <p className='mt-6 text-xl font-semibold'>{item.id}</p>
            <p className='text-sm text-gray-500'>{item.desc}</p>

            <p className='mt-6'>
              <span className='font-medium text-3xl '>${item.price}</span> / {item.credits} credits
            </p>

            <button onClick={() => paymentRazorpay(item.id)}
             className='bg-black text-white mt-8 px-16 py-4 rounded-full hover:scale-105 transition-all duration-500'>Purchase</button>

          </div>
        ))}

      </div>

    </div>
  )
}

export default BuyCredit