import { useState } from 'react'
import { FaSearch, FaHeart, FaCartPlus, FaHamburger } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext.jsx';
import { auth } from "../config/firebase"
import {signOut} from "firebase/auth"
import menu from '../assets/images/menu.svg'
const Header = () => {
  const [open, setOpen] = useState(false)
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <header className='flex static justify-between border-Gray border-b-2 px-10  lg:px-40 h-20 items-center'>
        <h1 className=' text-xl lg:text-3xl font-semibold'>Gee- <span className='text-Pink'>Store</span></h1>
        <nav className={open ? 'absolute lg:static bg-Pink top-20  py-5 lg:top-0' : "hidden lg:flex"}>
            <ul className='lg:flex grid lg:text-xl text-White lg:text-Black justify-center '>
              <Link className='px-5 font-semibold hover:text-Pink cursor-pointer' to={"/"}>Home</Link>
              <Link className='px-5 font-semibold hover:text-Pink cursor-pointer' to={"/Contact"}>Contact</Link>
              <Link className='px-5 font-semibold hover:text-Pink cursor-pointer' to={"/About"}>About</Link>
              <Link onClick={()=>signOut(auth)} className='lg:hidden font-semibold text-White px-5'>Logout</Link>
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
          <FaHeart className='mr-5'/>
          <Link to={"/cart"}><FaCartPlus className='mr-5'/></Link>
          <img src={menu} className='flex w-[1rem] lg:hidden' onClick={()=> setOpen(!open)}/>
          <button onClick={()=>signOut(auth)} className='bg-Pink rounded-full lg:flex hidden text-White px-5 pb-3 pt-2' >Logout</button>
        </div>
      </header>
    </>
  )
}

export default Header
