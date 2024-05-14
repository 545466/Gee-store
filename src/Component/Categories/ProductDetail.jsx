import { useState } from 'react';
import Data from '../Data'
import Header from '../Header'
import {  useParams } from "react-router-dom";

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
      <div className='px-40 pt-20'>
        {
            ProductDetails ? (
                <div className='flex justify-center '>
                    <img className='shadow w-80 ' src={ProductDetails.Image} alt="" />
                    <div className='pl-20'>
                      <h1 className='text-3xl font-semibold'>{ProductDetails.Title}</h1>
                      <p className='text-3xl text-Pink py-2 font-semibold'>{ProductDetails.Price}</p>
                      <div>
                        <p>Qty</p>
                        <div className='flex gap-1 pt-2'>
                          <button onClick={() => setCount(count-1)} className='bg-Gray py-2 px-4'>-</button>
                          <p className='bg-Gray py-2 px-4'>{count}</p>
                          <button onClick={() => setCount(count+1)} className='bg-Gray py-2 px-4'>+</button>
                        </div>
                      </div>
                      <div className='flex py-5 text-White font-semibold gap-3'>
                        <button className='bg-Pink py-3 px-5'>Add to Cart</button>
                        <button className='bg-Pink py-3 px-5'>Buy Now</button>
                      </div>
                      <p>Estimated Delivery: Monday, Apr 08 – Friday, Apr 12</p>
                    </div>
                </div>
            ) : ""
        }
      </div>
    </>
  )
}

export default ProductDetail
