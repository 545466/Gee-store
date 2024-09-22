import { Link } from "react-router-dom"
import Header from "../Header"
import { FaArrowRight } from "react-icons/fa"
const Settings = () => {
  return (
    <>
    <Header/>
      <div className="pt-10 flex justify-between items-center w-4/5 mx-auto pb-[1.5rem] border-b-[.1rem]">
        <Link to={"/Settings/Details"}>Personal Details</Link>
        <FaArrowRight/>
      </div>
      <div className="pt-5 flex justify-between items-center w-4/5 mx-auto pb-[1.5rem] border-b-[.1rem]">
        <Link to={"/Settings/password"}>Change Password</Link>
        <FaArrowRight/>
      </div>
      <div className="pt-5  flex justify-between items-center w-4/5 mx-auto pb-[1.5rem] border-b-[.1rem]">
        <Link to={"/Settings/Delivery"}>Delivery Details</Link>
        <FaArrowRight/>
      </div>
      <div className="pt-5 flex justify-between items-center w-4/5 mx-auto pb-[1.5rem] border-b-[.1rem]">
        <Link to={"/Settings/account"}>Account Status</Link>
        <FaArrowRight/>

      </div>
    </>
  )
}

export default Settings
