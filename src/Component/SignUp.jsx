import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignUp = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <>
      <section className="h-screen flex  items-center justify-center">
        <div
        
          onSubmit={SignUp}
          className="grid text-left justify-center my-auto "
        >
          <h1 className="pb-3 text-xl lg:text-4xl font-semibold">
            Create an account
          </h1>
          <p>Enter your details below</p>
          <div className="pt-10 pb-5 grid">
            <input
              className="border-b-2 mb-5 pb-2 outline-none border-Grey"
              onChange={(e) => setName(e.target.value)}
              type="text"
              name=""
              placeholder="Full-Name"
            />
            <input
              className="border-b-2 mb-5 pb-2 outline-none border-Grey"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name=""
              placeholder="Email"
            />
            <input
              className="border-b-2 mb-5 pb-2 outline-none border-Grey"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            onClick={SignUp}
            className=" py-3 w-full bg-Pink text-White font-semibold rounded"
          >
            Create Account
          </button>
          <div className="flex items-center justify-center border-2 border-Grey rounded py-3 mt-5">
            <FaGoogle className="mr-5 text-Pink " />
            <button className="font-semibold">Sign up with Google</button>
          </div>
          <div className="flex justify-center pt-7">
            <h1>Already have an account?</h1>
            <Link to={"/Login"}>
              <p className="ml-3 border-b-2 border-Grey pb-1 font-semibold">
                Log in
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
