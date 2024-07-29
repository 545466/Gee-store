import Header from "../Header";
import Data from "../Data";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import { useContext } from 'react'
import { AppContext } from "../../App";

const Fashion = () => {
  const {addToCart} = useContext(AppContext)

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <Header />
      <section className="lg:px-20 px-10">
        <div className=" flex text-Grey font-semibold pt-10">
          <Link to={"/"}>Home</Link>
          <p className="px-3">{">>"}</p>
          <p>Fashion</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 ">
          {Data.filter((prod) => prod.Category == "Fashion").map((prod) => {
            return (
              <div className="bg-Gray shadow mt-10 " key={prod}>
                <img className="w-full h-60 object-cover" src={prod.Image} alt="" />
                <div className="grid pt-5 px-5">
                  <h1 className="font-semibold">{prod.Title}</h1>
                  <p className="text-Pink font-semibold py-5">{prod.Price}</p>
                  <button onClick={() => addToCart(prod.id)} className="bg-Pink text-White py-2 mb-5">
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
  );
};

export default Fashion;
