import { useState } from 'react'
import aboutimg from '../assets/imgs/folder/aboutimg.webp'
const media =[
    {
        aboutimg:aboutimg
    }
]
export default function About() {
    const [isopen, setisopen] = useState(false)
  return (
    <>
    {/* main div */}
      <div className='flex flex-col lg:flex-row justify-between max-w-[100%] p-[5%]'>

            {/* first div */}
        <div className=''>

                <h2 className='font-extrabold text-2xl mb-[5%] '>
                    ABOUT PAPA JOHNS</h2>
                
                <div className="relative">
                <button 
                onClick={() => setisopen(!isopen)}
                className="bg-white text-black p-2 rounded text-start text-base w-full border border-gray-300 mb-4 lg:hidden flex justify-between items-start"
                >
    <span className="flex-1 break-words text-xl  text-left">
      About papa johns - here our story
    </span>
    <span className="text-lg">▼</span>
  </button>
</div>

            <ul className={`${isopen ? "block" : "hidden"} lg:block`}>




                <div className=' w-[100%]'>

                
                <li className='bg-green-800 text-xl
                text-white p-2 rounded-xl md:w-50 mb-[3%]  md:mb-[5%] lg:mb-[15%]'>
                <a className='hover:cursor-pointer'>
                About US</a></li>

                <li className=' mb-[3%] md:mb-[5%] lg:mb-[15%] hover:cursor-pointer
                hover:underline'>
                    <a href="">Quality Guarantee</a>
                    </li>
                <li className=' mb-[3%] md:mb-[5%] lg:mb-[15%] hover:cursor-pointer
                hover:underline'>
                    <a href="">Ingredients</a>
                    </li>
                <li className=' mb-[3%] md:mb-[5%] lg:mb-[15%] hover:cursor-pointer
                hover:underline'>
                    <a href="">Nutritional Info</a>
                    </li>
                <li className=' mb-[3%] md:mb-[5%] lg:mb-[15%] hover:cursor-pointer
                hover:underline'>
                    <a href="">Corporate Responsibility</a>
                    </li>
                    </div>
                    
            </ul>
        </div>

        {/* secound div */}
        <div className=' md:w-[100%] lg:w-[60%]'>
                {media.map((index)=>(
                    <div>
                        <img className='w-[100%]'  src={index.aboutimg} alt="" />

                        <div className='mt-[3%] text-gray-600'>
                        <h2 className='font-extrabold mb-[1%] text-black text-3xl'>ABOUT US</h2>
                        <h3 className='font-extrabold text-black mb-[5%]'>Building a Foundation of Quality</h3>
                        <p className=' mb-[5%]'>The secret to success is much like the
                        secret to making a better pizza - the more
                        you put into it, the more you get out of it. 
                        Our pizza family is as hungry for perfection today as we 
                        were when we first opened our doors more than 30 years ago. 
                        And we're driven to be the best at making innovative new products and 
                        recipes.</p>

                        <p className='mb-[5%]'>Quality is at our core. 
                            It’s the foundation we started with, 
                            from the first Papa Johns pizza that was made in a broom closet in Jeffersonville, IN, to now more than 5,000 
                            locations in 45 countries and territories around the world.</p>

                        <p className='mb-[5%]'>We don’t use cheap and more processed ingredients. 
                            Whether it's our signature sauce, toppings, 
                            our original fresh dough, or even the box itself, we invest in our ingredients 
                            to ensure that we always give you the finest quality pizza.</p>

                        <p className='mb-[5%]'>For you, it’s not just a better pizza. 
                            It’s a family gathering, memorable birthday, 
                            work celebration or simply a great meal. 
                            It’s our goal to make sure
                            you always have the best ingredients for every occasion.
                            </p>

                        <p className='text-xl mb-[5%]'>
                        <span className='text-black text-2xl font-bold'>Our Values, The Way We Carry Out Our Purpose:</span> <br />
                        <span className='font-bold text-black'>
                        EVERYONE BELONGS</span> 
                        <br />
                        Diversity, Equity, Inclusion & Teamwork</p>

                        <p className='mb-[5%]'>
                        <span className='text-black text-xl font-bold'>
                        DO THE RIGHT THING</span> <br />
                        Integrity,haracter and Community</p>

                        <p className='mb-[5%]'>
                        <span className='text-black font-bold text-xl'>
                        PEOPLE FIRST</span> <br />
                        Customer and Team Member Focus</p>
                        <p className='mb-[5%]'>
                        <span className='text-black font-bold text-xl'>INNOVATE TO WIN </span><br />
                        Think Differently and Lead Change</p>

                        <p className='mb-[5%]'>
                        <span className='text-black font-bold text-xl'>
                        HAVE FUN</span><br />
                        It’s Pizza, It Has To Be Fun!</p>
                        </div>

                        
                    </div>
                ))}
        </div>
      </div>
    </>
  )
}
