import React from 'react'
import TopFooter from './TopFooter'
import { NavLink } from 'react-router-dom'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <TopFooter/>
      <div className='flex flex-col md:flex-row justify-between p-8 max-w[80%] '>
        <ul className='flex flex-wrap flex-col sm:flex-row gap-3 ml-2 text-gray-500 text-center'>
          <NavLink>
            <li className='hover:underline'>International Sites</li>
          </NavLink>
          <NavLink>
            <li className='hover:underline'>Privacy</li>
          </NavLink>
          <NavLink>
            <li className='hover:underline'>Notice At Collection </li>
          </NavLink>
          <NavLink>
            <li className='hover:underline'>Terms Of Use</li>
          </NavLink>
          <NavLink>
            <li className='hover:underline'>Site Map</li>
          </NavLink>
          <NavLink>
            <li className='hover:underline'>Text & Email Offers</li>
          </NavLink>
        </ul>

        <div className='flex mt-[2%] md:mt-0 gap-4 mx-auto sm:mx-0'>
          <FaSquareFacebook className='text-3xl text-gray-500 hover:text-black cursor-pointer' />
          <FaXTwitter className='text-3xl text-gray-500 hover:text-black cursor-pointer'  />
          <FaYoutube className='text-3xl text-gray-500 hover:text-black cursor-pointer' />
          <FaInstagram className='text-3xl text-gray-500 hover:text-black cursor-pointer' />

        </div>

      </div>


      <div className='text-gray-500 text-xs/6 mb-[1%] max-w-[90%] p-5 ml-[1%]'>
        <p>
          Offers good for a limited time at participating U.S. Papa Johns restaurants. Prices may vary.
            Not valid with any other coupons or discounts.
            OREO is a trademark of Mondelēz International group,
            used under license. DORITOS® and COOL RANCH® are <br />
            registered trademarks owned by Frito-Lay North America,
            Inc. All beverage related trademarks are registered Trademarks of PepsiCo,
            Inc. Mars or Affiliates Trademarks used under license.
            Some offers require the purchase of multiple pizzas. Some <br />
            offers may be available online only. No triple toppings.
            Certain toppings may be excluded from special offer pizzas or
            require additional charge. Additional toppings extra.
            Limit seven toppings to ensure bake quality. Limited delivery area.
            Delivery fee <br /> may apply and may not be subject to discount.
            Minimum purchase may be required for delivery. 
            Customer responsible for all applicable taxes. <br />
          Customer Care Team Contact Us. If you are using a screen reader
          and are having problems using this website, please call
          (877) 547-7272 for assistance. If you have a food allergy, please notify us.
        </p>

        <p className='mt-[2%]'>©2024 Papa John's International, Inc. All Rights Reserved.</p>
        <p className='mt-[2%]'>Canada: Adults and youth (ages 13 and older)
          need an average of 2,000 calories a day, and children (ages 4 to 12)
          need an average of 1,500 calories a day.
          However, individual needs vary.</p>
          <p className='mt-[2%]'>w-webnc-p09-25.3.0-rc.8 25.3.0-rc.5</p>
          <p className='mt-[2%]'>Support ID: 5305-7466-9759</p>
      </div>
    </>
  )
}
