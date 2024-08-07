import { useNavigate, Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from 'react';
import hide from "../assets/images/hide.png"
import show from "../assets/images/show.png"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()
  
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
            <p>Enter your details below</p>
            <div className='pt-10  pb-3 w-[300px] grid'>
                <input onChange={(e) => setEmail(e.target.value)} className='border-b-2 mb-5 pb-2 outline-none border-Grey'  type="email" name="" placeholder='Email' />
                <div className=' flex justify-between border-b-2 border-Grey'>
                  <input onChange={(e) => setPassword(e.target.value)} className='pb-2 outline-none' type={ showPassword ? "text" : "password"} placeholder='Password' />
                  <img className='w-[1.3rem] h-[1.3rem]' src={showPassword ? hide : show} onClick={() => setShowPassword((prev) => !prev)}></img>
                </div>
            </div>
                { error && <span className='pb-3 text-Pink'>Wrong email or password</span>}
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
