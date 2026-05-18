import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import MeuCard from './MeuCard';
import Sliderr from '../Sliderr';

export default function TopMenu() {
  return (
    <>
      <div className='w-[95%] md:mx-auto'>

            <div className='ml-[2%] mb-[2%]'>

  {/* links */}
  <ul className='flex flex-wrap gap-2 lg:gap-[1%] w-full font-bold text-sm lg:text-lg'>
    {["PIZZA", "PAPADIAS", "PAPA BITES", "WINGS", "SIDES", "PAPA BOWLS", "DESSERTS", "DRINKS"].map((item, index) => (
      <NavLink key={index}>
        <li className={`rounded-2xl p-2 text-sm sm:text-md md:text-lg lg:text-xl hover:bg-green-700 hover:text-white text-black 
        ${index === 0 ? 'bg-green-700 text-white' : ''}`}>
          {item}
        </li>
      </NavLink>
    ))}
  </ul>

  <div className='md:w-[90%] max-w-[98%] mt-[5%]'>
    <div className='w-[100%] max-w-screen-xl  flex flex-col xl:flex-row items-start xl:items-center gap-2 xl:gap-4 border border-yellow-500 p-3'>
      <FaLocationDot className='text-lg xl:text-xl' />

      <span className='font-bold text-sm xl:text-xl'>
        START YOUR ORDER
      </span>

      <div className='w-full h-px xl:w-px xl:h-8 bg-gray-300'></div>

      <span className='font-semibold text-sm xl:text-lg'>
        Find your local store to see our full menu.
      </span>

      <span className='font-semibold text-sm xl:text-sm'>
        plus, see local deals, toppings, and prices
      </span>

      <button className='bg-green-700 rounded-4xl font-bold text-sm px-3 py-1 text-white hover:cursor-pointer hover:bg-green-800'>
        find our store
      </button>
    </div>
  </div>

</div>


            
            <MeuCard/>
      </div>
    </>
  )
}
