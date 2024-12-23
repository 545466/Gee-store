import { useContext, useState } from 'react';
import Header from '../Header'
import {  Link, useParams } from "react-router-dom";
import Footer from '../Footer';
import { DataContext } from '../Context/DataContext';
import ImageSwiper from '../ImageSwiper';

const ProductDetail = () => {
    const { product } = useContext(DataContext)


    const params = useParams();
    const name = params.name;
    const ProductDetails = product.find(
        (Product) => Product.Title.toLowerCase() === name
    )
  return (
    <>
      <Header />
      <div className='lg:px-40 px-5 pt-10'>
        {
            ProductDetails ? (
                <div className='lg:flex justify-center '>
                    <Link to={"/"} className="bg-Black py-1 w-max text-White px-3 rounded">Back</Link>
                    <div className='pt-10'>
                      <ImageSwiper  images={ProductDetails.photoURL}/>
                    </div>
                    <div className='lg:pl-20 lg:pt-0 pt-5'>
                      <h1 className='lg:text-3xl text-xl font-semibold'>{ProductDetails.Title}</h1>
                      <p className='lg:text-3xl text-Pink py-2 font-semibold'> ₦{Intl.NumberFormat().format(ProductDetails.Price)}</p>
                      <div>
                        <h1 className='font-semibold'>Product Description</h1>
                        <p>{ProductDetails.Description}</p>
                      </div>
                      <div className='flex py-5 text-White font-semibold gap-3'>
                        <button className='bg-Pink w-full rounded py-3 px-5'>Add to Cart</button>
                      </div>
                      <p className='pb-3'><span className='font-semibold'>Category: </span>{ProductDetails.Category}</p>
                      <p> <span className='font-semibold'>Estimated Delivery:</span> Monday, April 8th – Friday, April 12th</p>
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
