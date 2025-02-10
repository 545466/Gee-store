// import Phone from "../assets/Phone.png";
// import { FaApple, FaArrowRight } from "react-icons/fa";
import { useState } from 'react'
import hero3 from '../assets/images/slider.jpg'
import hero from '../assets/images/Slider1.png'
import hero1 from '../assets/images/slider2.jpg'
import hero2 from '../assets/images/slider3.png'
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg'

const Hero = () => {
  const slides = [
    hero,
    hero1,
    hero2,
    hero3
  ]
  // const Category = [
  //   "Woman's Fashion",
  //   "Men's Fashion",
  //   "Electronics",
  //   "Shoe & Bag",
  //   "Home & Lifestyle",
  //   "Kid's",
  //   "Health & Beauty",
  //   "Sports & Outdoor",
  // ];
  const [curr, setCurr] = useState(0)
  const prev = () => setCurr((curr ) => (curr == 0 ? slides.length -1 : curr -1))
  const next = () => setCurr((curr ) => (curr == slides.length -1 ? 0 : curr +1))

  
  return (
    <>
      <section className=" flex overflow-hidden lg:w-[65rem] relative justify-between lg:mx-40 pt-5  mx-5" >
        <div className='flex transition-transform  w-full ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)`}}>
          {
            slides.map((s) =>{
              return(
                <img  className=' object-contain  w-screen lg:w-[66rem] lg:h-[35rem]' key={s} src={s} alt="" />
              )
            })
          }
         </div>
        {/* <img className='w-full lg:h-[30rem]'  src={hero} alt="" /> */}
        <div className='flex absolute items-center justify-between px-5 inset-0'>
          <CgChevronLeft className='rounded-full p-1 bg-White/80 hover:bg-White' onClick={prev} size={25}/>
          <CgChevronRight className='rounded-full  p-1 bg-White/80 hover:bg-White' onClick={next} size={25}/>
        </div>
        </section>
        {/* <div className="flex bg-Black w-full py-5 mt-10 justify-between items-center  text-White">
          <div className=" pl-5 lg:pl-20">
            <div className="flex items-center">
              <FaApple className="text-4xl mr-3" />
              <p className="lg:text-2xl text-[.8rem]">iphone 14 series</p>
            </div>
           <div className="flex  lg:grid gap-5">
           <h1 className="lg:text-5xl text-[.6rem] py-2 lg:py-5 font-semibold">
              Up to 10% <br />
              off Voucher
            </h1>
            <div className="flex items-center">
              <p className="border-b-[.1rem] text-Pink font-bold border-Pink lg:text-2xl text-[.7rem] pr-2 pb-1 lg:mr-5">Shop Now</p>
              <FaArrowRight className="lg-w-full text-Pink w-[.6rem]" />
            </div>
           </div>
          </div>
          <img className="w-[10rem] lg:w-2/4" src={Phone} />
        </div> */}
    </>
  );
};

export default Hero;
