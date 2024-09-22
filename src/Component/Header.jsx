import { useState } from 'react'
import { FaSearch, FaHeart, FaCartPlus, FaSignOutAlt, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext.jsx';
import { auth } from "../config/firebase"
import {signOut} from "firebase/auth"
import menu from '../assets/images/menu.svg'
import logo from '../assets/images/gee store logo.png'
import { FaUser } from 'react-icons/fa6';
const Header = () => {
  const [open, setOpen] = useState(false)
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <header className='hidden  lg:flex static justify-between border-Gray border-b-2 px-10  lg:px-20 h-20 items-center'>
        {/* <h1 className=' text-xl lg:text-3xl font-semibold'>Gee- <span className='text-Pink'>Store</span></h1> */}
        <Link to={"/"}>
          <img className='w-[3rem]' src={logo} alt="" />
        </Link>
        <nav className={open ? 'absolute z-10 lg:static bg-Pink top-20 h-screen w-4/5 left-0 hidden lg:flex py-5 lg:top-0 translate-x-0 ease-in-out duration-300' : " translate-x-full ease-in-out duration-300 hidden left-3/4 w-0 lg:flex"}>
            <ul className='lg:flex grid lg:text-xl text-White lg:text-Black lg:justify-center '>
              <Link className='px-5 font-semibold  lg:flex hidden cursor-pointer' to={"/"}>Home</Link>
              <Link className='px-5 font-semibold  lg:flex hidden cursor-pointer' to={"/Store"}>Store</Link>
              <Link className='px-5 font-semibold  lg:flex hidden cursor-pointer' to={"/Contact"}>Contact</Link>
              <Link className='px-5 font-semibold  lg:flex hidden cursor-pointer' to={"/About"}>About</Link>
              
            </ul>
        </nav>
        <nav>
          {
            !open ? 
            (<p></p>) :
            (

            <button onClick={()=> setOpen(!open)} className='fixed top-4 right-8 lg:hidden z-20 text-2xl  text-White '>x</button>
            )
          }
          <ul className={`top-0 right-0 pt-20 lg:hidden text-White fixed z-10 bg-Pink h-full w-3/5 ${open ? `translate-x-0`:'translate-x-full'} ease-in-out duration-300`}>
              <Link className='px-5 flex items-center gap-3 font-semibold'>
                  <FaCartPlus/>
                  <p>Cart</p>
              </Link>
              <Link className='px-5 flex py-5 items-center gap-3 font-semibold'>
                  <FaUser/>
                  <Link to={"/Settings"}>Profile / Settings</Link>
              </Link>
              <Link onClick={()=>signOut(auth)} className={currentUser ? "lg:hidden flex items-center gap-3 font-semibold text-White px-5" : "hidden"}>
                  <FaSignOutAlt/>
                  <p>Logout</p>
              </Link>
              {
                currentUser ? "" : <Link className='px-5 font-semibold hover:text-Pink cursor-pointer' to={"/SignUp"}>Sign Up</Link>
              }
          </ul>
        </nav>
        <div className='flex  items-center'>
          <div className='hidden lg:flex items-center mr-5 bg-Gray rounded px-5 py-2'>
            <input className='mr-3 bg-Gray outline-none text-Black' type="search" placeholder='what are you looking for?' />
            <FaSearch />
          </div>
          <FaHeart className='mr-5 w-[4rem]'/>
          <Link to={"/cart"}><FaCartPlus className='mr-5 lg:w-[2rem]'/></Link>
          <img src={menu} className='flex w-[1rem] lg:hidden' onClick={()=> setOpen(!open)}/>
          <Link onClick={()=>signOut(auth)} className={currentUser ? "bg-Pink rounded-full pb-3 pt-2 hidden lg:flex font-semibold text-White px-5" : "hidden"}>Logout</Link>

          <div className='h-screen w-4/5 bg-White'>

          </div>

          {/* <button onClick={()=>signOut(auth)} className='bg-Pink rounded-full lg:flex hidden text-White px-5 pb-3 pt-2' >Logout</button> */}
        </div>
      </header>

      <header className='flex justify-between lg:hidden border-Gray border-b-2 px-10  lg:px-20 h-20 items-center'>
        <Link to={"/"}>
          <img className='w-[3rem]' src={logo} alt="" />
        </Link>

        <nav>
          {
            !open ? 
            (<p></p>) :
            (

            <button onClick={()=> setOpen(!open)} className='fixed top-8 right-8 lg:hidden z-20 h-[.5rem] text-xl  text-White '> <FaTimes></FaTimes> </button>
            )
          }
          <ul className={`top-0 right-0 pt-[6rem] lg:hidden text-White fixed z-10 bg-Pink h-full w-3/5 ${open ? `translate-x-0`:'translate-x-full'} ease-in-out duration-300`}>
              <Link className='px-5 flex items-center gap-3 font-semibold'>
                  <FaCartPlus/>
                  <p>Cart</p>
              </Link>
              <Link className='px-5 flex py-5 items-center gap-3 font-semibold'>
                  <FaUser/>
                  <Link to={"/Settings"}>Profile / Settings</Link>
              </Link>
              <Link onClick={()=>signOut(auth)} className={currentUser ? "lg:hidden flex items-center gap-3 font-semibold text-White px-5" : "hidden"}>
                  <FaSignOutAlt/>
                  <p>Logout</p>
              </Link>
              {
                currentUser ? "" : <Link className='px-5 font-semibold hover:text-Pink cursor-pointer' to={"/SignUp"}>Sign Up</Link>
              }
          </ul>
        </nav>
        <div className='flex items-center'>
          <FaHeart className='w-[4rem]'/>
          <Link to={"/cart"}><FaCartPlus className='mr-5 lg:w-[2rem]'/></Link>
          <img src={menu} className='flex w-[1rem] lg:hidden' onClick={()=> setOpen(!open)}/>
        </div>

      </header>
    </>
  )
}

export default Header
