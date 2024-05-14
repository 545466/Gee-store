import React from 'react'

const Login = () => {
  return (
    <>
      <section className='h-screen flex  items-center justify-center'>
        <div className='grid text-left justify-center my-auto '>
            <h1 className='pb-3 text-xl lg:text-4xl font-semibold'>Login in Gee-Store</h1>
            <p>Enter your details below</p>
            <div className='pt-10 pb-3 grid'>
                <input className='border-b-2 mb-5 pb-2 outline-none border-Grey'  type="email" name="" placeholder='Email' />
                <input className='border-b-2 mb-5 pb-2 outline-none border-Grey' type="password" placeholder='Password' />
            </div>
            <div className='flex items-center justify-between rounded py-3 '>
                <button className=' py-3 w-2/4 bg-Pink text-White font-semibold rounded'>Login</button>
                <p className='font-semibold text-Pink'>Forget Password?</p>
            </div>
    
        </div>
      </section>
    </>
  )
}

export default Login
