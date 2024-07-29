import Phone from "../assets/Phone.png";
import { FaApple, FaArrowRight } from "react-icons/fa";
// import hero from '../assets/images/banner.jpg'
const Hero = () => {
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
  return (
    <>
      <section className=" flex justify-between lg:mx-40 pt-10  mx-10 ">
        {/* <img className='w-full'  src={hero} alt="" /> */}
        <div className="flex bg-Black w-full py-5 mt-10 justify-between items-center  text-White">
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
        </div>
      </section>
    </>
  );
};

export default Hero;
