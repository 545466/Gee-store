import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { updatePassword } from "firebase/auth";

const Password = () => {
    
const {currentUser} = useContext(AuthContext)
const {oldPass, setOldPass} = useState("")
const {newPass, setNewPass} = useState("")
const {conPass, setConPass} = useState("")
const {error, setError} = useState(false)


const updateUserPassword = async() =>{
  const user = currentUser;
  const newPassword = "hejdgbls";
  if(newPass === conPass &&  oldPass === oldPass ){
    await updatePassword(user, newPassword)
    try{
      // Update successful.
      console.log("Password updated")
    }
    catch{
      // An error ocurred
      console.log("An error ocurred")
    }
  } else{
    setError(true)
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
            <input onChange={((e)=> {setOldPass(e.target.value)})} placeholder="Enter old password" className="border-Grey  border-[.1rem] mt-5 pl-3 w-full py-2 rounded outline-none" type="text"/>
            <input onChange={((e)=> {setNewPass(e.target.value)})} placeholder="Enter new password" className="border-Grey  border-[.1rem] mt-5 pl-3 w-full py-2 rounded outline-none" type="text"/>
            <input onChange={((e)=> {setConPass(e.target.value)})} placeholder="Confirm new password" className="border-Grey  border-[.1rem] mt-5 pl-3 w-full py-2 rounded outline-none" type="text"/>
            <p>{error ? "Password does not match" : ""}</p>
            <button onClick={updateUserPassword()} className="bg-Pink flex mx-auto w-full mt-5 justify-center rounded py-2 items-center text-White">Save Changes</button>
        </form>
      </div> 
    </section>
     <Footer/>
    </>
  )
}

export default Password
