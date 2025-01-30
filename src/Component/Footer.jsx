import { Link } from "react-router-dom"
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  return (
    <>
        <footer className="flex  mt-20 gap-5 text-White lg:flex-row flex-col bg-Black py-10 px-5 lg:p-40 justify-between">
            <div>
                <h1 className="font-semibold text-[1rem] pb-2">Gee-Store</h1>
                <p>Subscribe</p>
                <div className=" flex items-center justify-between my-4 pl-2 border-2 border-White ">
                    <input className="bg-Black outline-none" type="text" placeholder="Enter your email" />
                    <button className="bg-Pink p-2 font-semibold">Send</button>
                </div>
            </div>
            <div className="text-[.7rem] lg:text-xl">
                <h1 className="font-semibold lg:text-xl text-[1rem] pb-2">Support</h1>
                <p>Shop 18, shoping Mall, Effuren</p>
                <p className="py-2">geestore@gmail.com</p>
                <p>+2348146547298</p>
            </div>
            <div className="text-[.7rem] lg:text-xl grid">
                <h1 className="font-semibold lg:text-xl text-[1rem] pb-2">Account</h1>
                <Link to={"/Login"}>Login / Register</Link>
                <Link to={"/Cart"} className="py-2">Cart</Link>
                <Link to={"/Store"}>Shop</Link>
            </div>
            {/* <div className="text-[.7rem] lg:text-xl">
                <h1 className="font-semibold lg:text-xl text-[1rem] pb-2">Quick Link</h1>
                <p>Privacy Policy</p>
                <p className="py-2">FAQ</p>
                <p>Contact</p>
            </div> */}
        </footer>
    </>
  )
}

export default Footer