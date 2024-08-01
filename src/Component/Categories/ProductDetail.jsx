import { useState } from 'react';
import Data from '../Data'
import Header from '../Header'
import {  useParams } from "react-router-dom";
import Footer from '../Footer';

const ProductDetail = () => {
    const [count, setCount] = useState(0);
    const params = useParams();
    const name = params.name;
    const ProductDetails = Data.find(
        (Product) => Product.Title.toLowerCase() === name
    )
  return (
    <>
      <Header />
      <div className='lg:px-40 px-5 pt-20'>
        {
            ProductDetails ? (
                <div className='lg:flex justify-center '>
                    <img className='shadow lg:w-80 ' src={ProductDetails.Image} alt="" />
                    <div className='lg:pl-20 lg:pt-0 pt-5'>
                      <h1 className='lg:text-3xl text-xl font-semibold'>{ProductDetails.Title}</h1>
                      <p className='lg:text-3xl text-Pink py-2 font-semibold'>{ProductDetails.Price}</p>
                      <div className='flex items-center gap-3 lg:grid'>
                        <p>Qty</p>
                        <div className='flex gap-1 pt-2'>
                          <button onClick={() => setCount(count-1)} className='bg-Gray lg:py-2 py-1 px-2 lg:px-4'>-</button>
                          <p className='bg-Gray lg:py-2 py-1 px-2 lg:px-4'>{count}</p>
                          <button onClick={() => setCount(count+1)} className='bg-Gray lg:py-2 py-1 px-2 lg:px-4'>+</button>
                        </div>
                      </div>
                      <div className='flex py-5 text-White font-semibold gap-3'>
                        <button className='bg-Pink w-full rounded py-3 px-5'>Add to Cart</button>
                        <button className='bg-Pink w-full rounded py-3 px-5'>Buy Now</button>
                      </div>
                      <p className='pb-3'><span className='font-semibold'>Category: </span>{ProductDetails.Category}</p>
                      <p> <span className='font-semibold'>Estimated Delivery:</span> Monday, April 8th – Friday, April 12th</p>
                      <div>
                        <p>Contact Seller</p>
                        <input type="text" />
                        <button>Send Message</button>
                      </div>
                    </div>
                </div>
            ) : ""
        }
      </div>
      <Footer/>
    </>
  )
}

export default ProductDetail
