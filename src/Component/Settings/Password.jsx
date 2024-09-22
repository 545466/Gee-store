import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { updatePassword } from "firebase/auth";

const Password = () => {
    
const {currentUser} = useContext(AuthContext)
console.log(currentUser)
const updateUserPassword = async() =>{
  const user = currentUser;
  const newPassword = "hejdgbls";

  await updatePassword(user, newPassword)
  try{
    // Update successful.
    console.log("Password updated")
  }
  catch{
    // An error ocurred
    console.log("An error ocurred")
  }
}
  return (
    <>
    <Header/>
    <section>
        
        <div className="pt-5 w-4/5 grid mx-auto">
        <Link className="bg-Black py-1 w-max text-White px-3 rounded " to={"/Settings"}>Back</Link>
        <h1 className="font-semibold pt-10">Change Password</h1>
        <form action="">
            <input placeholder="Enter old password" className="border-Grey  border-[.1rem] mt-5 pl-3 w-full py-2 rounded outline-none" type="text"/>
            <input placeholder="Enter new password" className="border-Grey  border-[.1rem] mt-5 pl-3 w-full py-2 rounded outline-none" type="text"/>
            <input placeholder="Confirm new password" className="border-Grey  border-[.1rem] mt-5 pl-3 w-full py-2 rounded outline-none" type="text"/>
            <button onClick={updateUserPassword()} className="bg-Pink flex mx-auto w-full mt-5 justify-center rounded py-2 items-center text-White">Save Changes</button>
        </form>
      </div> 
    </section>
     <Footer/>
    </>
  )
}

export default Password
