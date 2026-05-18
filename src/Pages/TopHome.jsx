import img1 from '../assets/imgs/img1.webp'
import img2 from '../assets/imgs/img2.webp'
import img3 from '../assets/imgs/img3.webp'
import img4 from '../assets/imgs/img4.webp'
import img5 from '../assets/imgs/img5.webp'
import img6 from '../assets/imgs/img6.webp'
import img7 from '../assets/imgs/img7.webp'
import img8 from '../assets/imgs/img8.webp'
import img9 from '../assets/imgs/img9.webp'
import img10 from '../assets/imgs/img10.webp'
import img11 from '../assets/imgs/img11.webp'
import dollar from '../assets/imgs/onedollar.svg'
import star from '../assets/imgs/star.svg'
import star2 from '../assets/imgs/start2.svg'
import coin from '../assets/imgs/coin.svg'
import app from '../assets/imgs/folder/badge-app-store.svg'
import play from '../assets/imgs/folder/badge-google-play.webp'
import google from '../assets/imgs/folder/groupapp1.webp'

import logo2 from '../assets/imgs/logo2.svg'

const media = [
    {
        img1:img1,
        img2:img2,
        img3:img3,
        img4:img4,
        img5:img5,
        img6:img6,
        img7:img7,
        img8:img8,
        img9:img9,
        img10:img10,
        img11:img11,
        logo2:logo2,
        dollar:dollar,
        star:star,
        star2:star2,
        coin:coin,
        app:app,
        play:play,
        google:google,
    }
]
export default function TopHome() {
  return (
    <>
      <div className=' mt-[3%] text-center'>
        <h2 className='font-extrabold text-xl' >EXPLORE OUT MENU</h2>
        <div className="flex flex-col gap-4 mt-[1%] hover:cursor-pointer">
  {media.map((item, key) => {
    const images = [
      { src: item.img1, name: "Pizza" },
      { src: item.img2, name: "Cheese" },
      { src: item.img3, name: "Tomato" },
      { src: item.img4, name: "Mushroom" },
      { src: item.img5, name: "Onion" },
      { src: item.img6, name: "Garlic" },
      { src: item.img7, name: "Chicken" },
      { src: item.img8, name: "Olives" },
      { src: item.img9, name: "Pepper" },
      { src: item.img10, name: "Meat" },
      { src: item.img11, name: "Basil" },
    ];

    const firstRow = images.slice(0, 6);
    const secondRow = images.slice(6, 11);

    return (
      <div key={key} className="flex flex-col gap-6 items-center">
        {/* الصف الأول */}
        <div className="flex justify-center gap-6 flex-wrap">
          {firstRow.map((img, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={img.src}
                alt={img.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <p className="text-sm font-medium mt-2 text-center">{img.name}</p>
            </div>
          ))}
        </div>

        {/* الصف الثاني */}
        <div className="flex justify-center gap-6 flex-wrap">
          {secondRow.map((img, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={img.src}
                alt={img.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <p className="text-sm font-medium mt-2 text-center">{img.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  })}
</div>


    <div className='border border-gray-300 shadow mt-[3%] max-w-[60%] mx-auto p-5 rounded-xl'>
            {media.map((index)=>(
                <>

                <div className=''>
                
                <div className='flex flex-col sm:flex-row gap-[5%] p-3 mb-[2%]'>
                <img src={index.logo2} alt="" />
                <span className='font-extrabold md:text-xl lg:text-2xl mt-4'>START EARNING POINTS TO
                    REDEEM TOWARDS YOUR FAVORITE MENU ITEMS
                    </span>

                    </div>

                    <div className='flex flex-col md:flex-row justify-evenly'>

                    <div className='flex justify-evenly gap-4 mt-[5%]'>
                        <div>
                        <img className='w-25' src={index.dollar} alt="" />
                        <p className='font-bold'>1 Dollar Spent</p>
                        </div>

                        <div>
                        <div className='font-extrabold text-3xl mt-[40%]'>=</div>
                        </div>
                        <div>
                        <img className='w-25' src={index.star} alt="" />
                        <p className='font-bold'>1 Point</p>    
                        </div>
                    </div>

                    <div className='sm:w-full h-px md:w-0.5 md:h-40 md:mx-4 font-bold bg-black'></div>

                    <div className='flex justify-evenly gap-4 mt-[5%] '>

                        <div>
                        <img className='w-25' src={index.star2} alt="" />
                            <p className='font-bold'>15 Points</p>
                        </div>
                        <div>
                        <div className='font-extrabold text-3xl mt-[40%]'>=</div>
                        </div>
                        <div>
                        <img className='w-25' src={index.coin} alt="" />
                        <p className='font-bold'>$2 Papa Dough</p>
                        </div>
                    </div>


                    </div>

                        <ul className='flex justify-center 
                        ml-1 mt-[2%] mb-[5%] underline text-green-900
                        hover:cursor-pointer mt-[3%]'>
                            <li>Rewards FAQ</li>
                            <div className='w-0.5 h-5 bg-green-900 mx-3'></div>
                            <li>Rewards Terms   </li>
                        </ul>
                        <div className='mt-[1%]'>
                        <button className='mr-3 bg-green-800 text-white
                        rounded-xl p-2 hover:bg-green-700 cursor-pointer mb-[5%]'>JOIN NOW</button>
                        <button className='mr-3 bg-white text-black
                        border border-green-800
                        rounded-xl p-2  font-bold hover:bg-slate-50 cursor-pointer'>SIGN UP</button>
                            
                        </div>
                    <div>

                    </div>
                </div>
                </>
            ))}
    </div>


    <div className='flex flex-col md:flex-row justify-between  rounded-md mt-[2%] w-full bg-black'>

            <div className='p-[8%]'>

              <div className='lg:mt-[30%]'>
              <h2 className='text-white font-extrabold text-xl lg:text-2xl'>ORDER FROM OUR APP</h2>
              {media.map((index,i)=>(
              
                <div className='flex flex-col md:flex-row 
                items-center justify-center mt-[3%] gap-4 mt-[6%]
                hover:cursor-pointer' key={i}>
                <img className='w-35' src={index.app} alt="" />
                <img className='w-35' src={index.play} alt="" />

                </div>
                
              ))}
              </div>
            </div>


            <div className='w-[50%] ml-[30%] sm:ml-[30%]'>
                  {media.map((index)=>(
                    <div>
                      <img className='w-[80%]' src={index.google}/>
                    </div>
              ))}
              
            </div>
    </div>

      </div>
    </>
  )
}
