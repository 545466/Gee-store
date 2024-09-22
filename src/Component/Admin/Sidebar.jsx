/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa"
import { FaGear } from "react-icons/fa6"
import { FaSignOutAlt } from "react-icons/fa"
// import user from '../../assets/images/user.png'
import logo from '../../assets/images/gee store logo.png'
import { Link } from "react-router-dom"



const Sidebar = ({open}) => {
    
  return (
    <>
    <section>
        <section className={open ? "w-[200px]  px-5 h-screen border-r-[.1rem]" : "lg:w-[250px] px-5 h-screen border-r-[.1rem] lg:flex lg:flex-col hidden"}>
            <div className="flex items-center gap-3 pt-10">
                <img className='w-[3rem] hidden lg:flex' src={logo} alt="" />

                {/* <img width={45} src={user} alt="user" />
                <span>
                    <h1>Tony Oloriogun</h1>
                    <p className="text-[.7rem]">Administrator</p>
                </span> */}
            </div>
            <p className="pt-5 font-semibold">Pages</p>
            <div>
                <div className="flex px-3 gap-2 items-center rounded cursor-pointer hover:bg-Black hover:text-White py-2">
                    <FaUser className="text-[.8rem] lg:text-xl"/>
                    <Link to={'/Dashboard'} className="text-[.8rem] lg:text-[1rem] font-semibold">Dashboard</Link>
                </div>
                <div className="flex px-3 gap-2 items-center rounded cursor-pointer hover:bg-Black hover:text-White py-2">
                    <FaUser className="text-[.8rem] lg:text-xl"/>
                    <Link to={'/user'} className="text-[.8rem] lg:text-[1rem] font-semibold">Users</Link>
                </div>
                <div className="flex px-3 gap-2 items-center rounded cursor-pointer hover:bg-Black hover:text-White py-2">
                    <FaUser className="text-[.8rem] lg:text-xl"/>
                    <Link to={'/Product'} className="text-[.8rem] lg:text-[1rem] font-semibold">Products</Link>
                </div><div className="flex px-3 gap-2 items-center rounded cursor-pointer hover:bg-Black hover:text-White py-2">
                    <FaUser className="text-[.8rem] lg:text-xl"/>
                    <p className="text-[.8rem] lg:text-[1rem] font-semibold">Categories</p>
                </div>
                <div className="flex px-3 gap-2 items-center rounded cursor-pointer hover:bg-Black hover:text-White py-2">
                    <FaGear className="text-[.8rem] lg:text-xl"/>
                    <p className="text-[.8rem] lg:text-[1rem] font-semibold">Orders</p>
                </div>
                <div className="flex px-3 gap-2 items-center rounded cursor-pointer hover:bg-Black hover:text-White py-2">
                    <FaGear className="text-[.8rem] lg:text-xl"/>
                    <p className="text-[.8rem] lg:text-[1rem] font-semibold">Reports</p>
                </div>
            </div>
            <p className="pt-5 font-semibold">Users</p>
            <div>
                <div>
                <div className="flex px-3 gap-2 items-center rounded cursor-pointer hover:bg-Black hover:text-White py-2">
                    <FaGear className="text-[.8rem] lg:text-xl"/>
                    <p className="text-[.8rem] font-semibold">Settings</p>
                </div>
                <div className="flex absolute bottom-0 px-3 pb-5 gap-2 items-center rounded cursor-pointer hover:bg-Black hover:text-White py-2">
                    <FaSignOutAlt className="text-[.8rem] lg:text-xl"/>
                    <p className="text-[.8rem] font-semibold">Logout</p>
                </div>
                </div>
            </div>
        </section>
    </section>
    </>
  )
}

export default Sidebar