import { useNavigate, Link } from 'react-router-dom'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from 'react';
import hide from "../assets/images/hide.png"
import show from "../assets/images/show.png"
import google from '../assets/svg/google.svg'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()
  
  const pop = async() =>{
     const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
    navigate("/")

  }

  const Login = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setIsSubmitting((prev) => !prev);
      navigate("/")
    } catch(error){
      setError(true)
    }
    
  };
  return (
    <>
      <section className='h-screen flex  items-center justify-center'>
        <div className='grid text-left justify-center my-auto '>
            <h1 className='pb-3 text-xl lg:text-4xl font-semibold'>Login in Gee-Store</h1>
            <div onClick={pop} className='w-full flex justify-center gap-3 py-2 border-[.1rem] rounded my-5'>
              <img src={google} alt="" />
              <button className=''>Signup with Google</button>
            </div>
            <p>Enter your details below</p>
            <div className='pt-5  pb-3 w-[300px] grid'>
                <input onChange={(e) => setEmail(e.target.value)} className='border-[.1rem] rounded px-2 mb-5 py-2  flex items-center outline-none border-Grey'  type="email" name="" placeholder='example@gmail.com' />
                <div className=' flex justify-between items-center rounded px-2 border-[.1rem] border-Grey'>
                  <input onChange={(e) => setPassword(e.target.value)} className='pb-2 py-2 outline-none flex items-center' type={ showPassword ? "text" : "password"} placeholder='Password' />
                  <img className='w-[1.3rem] h-[1.3rem]' src={showPassword ? hide : show} onClick={() => setShowPassword((prev) => !prev)}></img>
                </div>
            </div>
                { error && <span className='pb-3 text-center text-Pink'>Wrong email or password, Please check </span>}
            <button disabled={isSubmitting} onClick={Login} className=' py-3 w-full bg-Pink text-White font-semibold rounded'>{ isSubmitting ? "Logining" : "Login"}</button>
            <div className='flex  items-center gap-2 rounded py-5 '>
                <p className=''>You don`t have account?</p>
                <Link to={"/SignUp"} className='underline font-semibold'>Register</Link>
            </div>
    
        </div>
      </section>
    </>
  )
}

export default Login
