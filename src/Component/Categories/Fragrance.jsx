import Header from "../Header";
import Data from "../Data";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Fragrance = () => {
    useEffect(() => {
        window.scroll(0, 0);
      }, []);
      return (
        <>
          <Header />
          <section className="lg:px-20 px-10">
            <div className=" flex px-5 lg:px-20 text-Grey font-semibold pt-10">
              <Link to={"/"}>Home</Link>
              <p className="px-3">{">>"}</p>
              <p>Fragrance</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 px-5 lg:px-20">
              {Data.filter((prod) => prod.Category == "Fragrance").map((prod) => {
                return (
                  <div className="bg-Gray mt-10 shadow " key={prod}>
                    <img className="w-full object-cover h-60 " src={prod.Image} alt="" />
                    <div className="grid pt-5 px-5">
                      <h1 className='font-semibold'>{prod.Title}</h1>
                      <p className="text-Pink font-semibold py-5">{prod.Price}</p>
                      <button className="bg-Pink text-White py-2 mb-5">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </>
  )
}

export default Fragrance
