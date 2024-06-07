import { useNavigate, Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate()
  
  const Login = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
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
            <p>Enter your details below</p>
            <div className='pt-10 pb-3 w-[300px] grid'>
                <input onChange={(e) => setEmail(e.target.value)} className='border-b-2 mb-5 pb-2 outline-none border-Grey'  type="email" name="" placeholder='Email' />
                <input onChange={(e) => setPassword(e.target.value)} className='border-b-2 mb-5 pb-2 outline-none border-Grey' type="password" placeholder='Password' />
            </div>
                { error && <span className='pb-3 text-Pink'>Wrong email or password</span>}
                <button onClick={Login} className=' py-3 w-full bg-Pink text-White font-semibold rounded'>Login</button>
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
