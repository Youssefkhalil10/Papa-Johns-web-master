import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/imgs/menu/img1.webp'
import img2 from '../../assets/imgs/menu/img2.webp'

const media = [
    { src: img1, 
      img2:img2,
      alt: "Image 1"
     },
   
   
  ];
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function MeuCard() {

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );

  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 1.5,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   prevArrow: <PrevArrow />,
  //   nextArrow: <NextArrow />,
  // };

  return (
    <>
    <div className="flex flex-col md:flex-row items-center gap-4">
      <div>
        <p className='font-bold mb-[2%]'>CREATE YOUR OWN PIZZA</p>
        <p className=''>Get started with one of our signature crusts.</p>
        </div>
      {media.map((index)=>(
        <>
        <div className='border border-gray-300 hover:cursor-pointer w-80 h-auto pt-0'>
        <img className='w-full rounded-t-lg block' src={index.src} alt="" />
  
  <div className='p-2'> 
    <p className="font-bold">Original Crust</p>
    <p className="text-sm mb-2">
      Our signature dough. Fresh, never frozen. Made with 6 simple ingredients & hand-tossed
    </p>
    <button className='bg-green-700 hover:cursor-pointer text-white rounded-xl px-4 py-2 text-sm'>
      ORDER NOW
    </button>
    </div>
    </div>

        <div className='border border-gray-300 hover:cursor-pointer w-80 h-auto pt-0'>
        <img className='w-full rounded-t-lg block' src={index.src} alt="" />
  
  <div className='p-2'> 
    <p className="font-bold">Original Crust</p>
    <p className="text-sm mb-2">
      Our signature dough. Fresh, never frozen. Made with 6 simple ingredients & hand-tossed
    </p>
    <button className='bg-green-700 hover:cursor-pointer text-white rounded-xl px-4 py-2 text-sm'>
      ORDER NOW
    </button>
    </div>
    </div>

        <div className='border border-gray-300 hover:cursor-pointer w-80 h-auto pt-0'>
        <img className='w-full rounded-t-lg block' src={index.src} alt="" />
  
  <div className='p-2'> 
    <p className="font-bold">Original Crust</p>
    <p className="text-sm mb-2">
      Our signature dough. Fresh, never frozen. Made with 6 simple ingredients & hand-tossed
    </p>
    <button className='bg-green-700 hover:cursor-pointer text-white rounded-xl px-4 py-2 text-sm'>
      ORDER NOW
    </button>
    </div>
    </div>

        <div className='border border-gray-300 hover:cursor-pointer w-80 h-auto pt-0'>
        <img className='w-full rounded-t-lg block' src={index.src} alt="" />
  
  <div className='p-2'> 
    <p className="font-bold">Original Crust</p>
    <p className="text-sm mb-2">
      Our signature dough. Fresh, never frozen. Made with 6 simple ingredients & hand-tossed
    </p>
    <button className='bg-green-700 hover:cursor-pointer text-white rounded-xl px-4 py-2 text-sm'>
      ORDER NOW
    </button>
    </div>
    </div>

        <div className='border border-gray-300 hover:cursor-pointer w-80 h-auto pt-0'>
        <img className='w-full rounded-t-lg block' src={index.src} alt="" />
  
  <div className='p-2'> 
    <p className="font-bold">Original Crust</p>
    <p className="text-sm mb-2">
      Our signature dough. Fresh, never frozen. Made with 6 simple ingredients & hand-tossed
    </p>
    <button className='bg-green-700 hover:cursor-pointer text-white rounded-xl px-4 py-2 text-sm'>
      ORDER NOW
    </button>
    </div>
    </div>

    </>
      ))}

    </div>
    
    <div className='w-[30%] h-1 mt-[3%] mx-auto  bg-black  '></div>

    <div className='mt-[4%]'>
    <p className='font-bold text-center text-md md:text-xl lg:text-2xl mb-[1%]'>MOST POPULAR</p>
        {media.map((index)=>(
          <>
          <div className='flex flex-col  md:flex-row hover:cursor-pointer items-center gap-3'>
          <div className='border border-gray-300 w-80 h-auto pt-0'>
        <img className='w-full rounded-t-lg block' src={index.img2} alt="" />
  
  <div className='p-2'> 
    <p className="font-bold">Original Crust</p>
    <p className="text-sm mb-2">
      Our signature dough. Fresh, never frozen. Made with 6 simple ingredients & hand-tossed
    </p>
    <button className='bg-green-700 hover:cursor-pointer text-white rounded-xl px-4 py-2 text-sm'>
      ORDER NOW
    </button>
    </div>
          </div>
          <div className='border border-gray-300 w-80 h-auto pt-0'>
        <img className='w-full rounded-t-lg block' src={index.img2} alt="" />
  
  <div className='p-2'> 
    <p className="font-bold">Original Crust</p>
    <p className="text-sm mb-2">
      Our signature dough. Fresh, never frozen. Made with 6 simple ingredients & hand-tossed
    </p>
    <button className='bg-green-700 text-white rounded-xl px-4 py-2 text-sm'>
      ORDER NOW
    </button>
    </div>
          </div>
          <div className='border border-gray-300 w-80 h-auto pt-0'>
        <img className='w-full rounded-t-lg block' src={index.src} alt="" />
  
  <div className='p-2'> 
    <p className="font-bold">Original Crust</p>
    <p className="text-sm mb-2">
      Our signature dough. Fresh, never frozen. Made with 6 simple ingredients & hand-tossed
    </p>
    <button className='bg-green-700 text-white rounded-xl px-4 py-2 text-sm'>
      ORDER NOW
    </button>
    </div>
          </div>
          <div className='border border-gray-300 w-80 h-auto pt-0'>
        <img className='w-full rounded-t-lg block' src={index.src} alt="" />
  
  <div className='p-2'> 
    <p className="font-bold">Original Crust</p>
    <p className="text-sm mb-2">
      Our signature dough. Fresh, never frozen. Made with 6 simple ingredients & hand-tossed
    </p>
    <button className='bg-green-700 text-white rounded-xl px-4 py-2 text-sm'>
      ORDER NOW
    </button>
    </div>
          </div>
          </div>
          </>
        ))}
    </div>

    </>

  );
}
