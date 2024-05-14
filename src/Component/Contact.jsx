import { FaMailBulk, FaPhone } from "react-icons/fa"
import Header from "./Header"
import Footer from "./Footer"
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
        <Header/>
        <div className=" flex lg:pl-20 pl-10 text-Grey font-semibold pt-10">
          <Link to={"/"}>Home</Link>
          <p className="px-3">{">>"}</p>
          <p className="text-Black">Contact</p>
        </div>
        <section className="flex flex-col lg:flex-row justify-between mt-10 px-10 lg:my-20 lg:px-20">
            <div className="">
                <div className="flex items-center pb-5">
                    <div className="bg-Pink p-2 rounded-full"><FaPhone className=" rounded-full w-5 h-5 text-White"/></div>
                    {/* <FaPhone className="bg-Pink rounded-full w-8 h-8 text-White"/> */}
                    <h1 className="pl-5 font-semibold">Call To Us</h1>
                </div>
                <p>We are available 24/7, 7 days a week</p>
                <p className="pt-3">Phone: +2348146547298</p>
                <div></div>
                <div className="flex items-center lg:mt-5 py-5">
                    <div className="bg-Pink p-2 rounded-full"><FaMailBulk className=" rounded-full w-5 h-5 text-White"/></div>
                    <h1 className="pl-5 font-semibold">Write To Us</h1>
                </div>
                <p>Fill out our form and we will contact <br />you within 24 hours.</p>
                <p className="pt-3">Email: support@geestore.com</p>
            </div>
            <div className=" lg:max-w-[70%] max-w-full pt-10 lg:pt-0  grid ">
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-3">
                    <input className="bg-Gray outline-none rounded px-5 py-3" type="text" placeholder="Your Name" />
                    <input className="bg-Gray outline-none rounded px-5 py-3" type="text" placeholder="Your Email" />
                    <input className="bg-Gray outline-none rounded px-5 py-3" type="text" placeholder="Your Phone" />
                </div>
                <textarea className="bg-Gray outline-none mt-7 pl-5 pt-5 rounded w-full" placeholder="Your Message" cols="30" rows="10"></textarea>
                <button className="bg-Pink text-White mt-7 ml-auto px-5 py-2 rounded">Send Message</button>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default Contact