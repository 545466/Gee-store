import { useState } from "react";
import { auth } from "../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import Header from "./Header";


const ForgetPassword = () => {
  const [email, setEmail] = useState("")

  const forgetPassword = (e) =>{
    e.preventDefault()
    sendPasswordResetEmail(auth, email)
    .then(()=>{
        console.log("success")
    }).catch(()=> {
        console.log("failed")
    })
  }
  return (
    <>
        <section>
            <Header/>
            <div className="pt-5 w-4/5 grid mx-auto">
            <h1 className="font-semibold pt-10 pb-5 text-2xl">Lost Your Password?</h1>
            <p className="text-Grey font-semibold text-base">Supply us with the email you use to registered with and we will send you a link to reset your password</p>
            <form action="">
                <input onChange={((e)=> {setEmail(e.target.value)})} placeholder="example@gmail.com" className="border-Grey  border-[.1rem] mt-5 pl-3 w-full py-2 rounded outline-none" type="text"/>
                <button onClick={forgetPassword} className="bg-Pink flex mx-auto w-full mt-5 justify-center rounded py-2 items-center font-semibold text-White">Reset Password</button>
            </form>
        </div> 
        </section>
    </>
  )
}

export default ForgetPassword