import Header from "../Header";
import Data from "../Data";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react'
import { AppContext } from "../../App";
import Footer from "../Footer";

const Shoe = () => {
  const {addToCart} = useContext(AppContext)

    useEffect(() => {
        window.scroll(0, 0);
      }, []);
      return (
        <>
          <Header />
          <section className="lg:px-20 px-5">
            <div className=" flex lg:px-20 text-Grey font-semibold pt-10">
              <Link to={"/"}>Home</Link>
              <p className="px-3">{">>"}</p>
              <p className="text-Black">Shoe</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:px-20">
              {Data.filter((prod) => prod.Category == "Shoes").map((prod) => {
                return (
                  <div className="bg-Gray shadow mt-10 " key={prod}>
                    <img className="w-full lg:h-60 h-40 object-cover" src={prod.Image} alt="" />
                    <div className="grid lg:pt-5 pt-2">
                      <h1 className='font-semibold pl-2 lg:text-[1rem] text-[.8rem]'>{prod.Title}</h1>
                      <p className="text-Pink font-semibold pl-2 lg:text-[1rem] text-[.8rem] lg:py-5 py-2">{prod.Price}</p>
                      <button onClick={() => addToCart(prod.id)} className="bg-Pink text-[.8rem] text-White py-2 ">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <Footer/>
        </>
  )
}

export default Shoe
