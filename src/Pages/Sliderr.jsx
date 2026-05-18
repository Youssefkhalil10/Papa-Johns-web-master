import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home1 from "../assets/imgs/home 1.webp";
import home2 from "../assets/imgs/home 2.webp";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import add from '../assets/imgs/add.svg'
const media =[
  {
    add:add,
    title:'add'
  }
]
export default function Sliderr() {
  const images = [
    { src: home1, alt: "Image 1" },
    { src: home2, alt: "Image 2" },
  ];

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

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="relative w-full overflow-hidden px-4">
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i} className="relative p-1 max-w-[100%] mx-auto">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full rounded-lg h-[200px] sm:h-auto object-cover"
            />

            <div className="

            absolute top-[33%] 
            sm:top-[45%]
            md:top-[55%] md:left-[8%] 
            lg:top-[60%]

             w-[70%] sm:w-[70%] sm:h-[48%]
            md:w-[70%] md:h-[42%]
            lg:w-[50%] lg:h-[35%]
            bg-green-700
             md:text-lg hover:cursor-pointer
            py-7 px-3 md:p-5 rounded-xl 
            font-bold text-lime-300
            
            "
            
            >

                <div className="p-2 md:p-5">
              <p 
              className="
              mb-2 bg-red-500
              text-sm md:text-xl
              xl:text-3xl
              w-fit p-1 rounded-md
              text-white"
              >LIMITED TIME</p>

              <h2 
              className="
              text-sm sm:text-sm
              md:text-xl 
              lg:text-2xl lg:mt-[3%]
              xl:text-2xl xl:mt-[10%]"
              >BUY ONE , GET ONE FREE</h2>
              {media.map((index)=>(
                <img 
                className="
                absolute
                w-[12%] md:w-[13%]
                left-[80%] bottom-[80%]
                md:bottom-[80%]
                
                md:left-[80%]" src={index.add} />
              ))}
                </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
