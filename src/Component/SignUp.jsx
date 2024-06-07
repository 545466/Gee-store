import { auth, storage, db } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { updateProfile } from 'firebase/auth'
import photo from "../assets/images/photo.png"
import { addDoc, doc, collection } from "firebase/firestore";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState( )
  const Usercol = collection(db, "Users") 
  const SignUp = async (e) => {
    e.preventDefault()
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const storageRef = ref(storage, name);

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      (error) => {
        console.log(error)
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
          await updateProfile(res.user, {
            name,
            photoURL:downloadURL
          });
          await addDoc(Usercol, {
            uid: res.user.uid,
            name,
            email,
            photoURL: downloadURL,
          });
        });
      })
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
          <div className="pt-10 pb-5 w-[300px] grid">
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
              className="border-b-2 pb-2 outline-none border-Grey"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
          <input className="hidden" type="file" name="" id="file" />
          <label onChange={(e) => setFile(e.target.value)} className="flex cursor-pointer mb-5 font-semibold gap-3 items-center" htmlFor="file">
            <img className="w-10" src={photo} alt="" />
            <p >Add your Avater</p>
          </label>
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
          <div className="flex gap-3 pt-5">
            <h1>Already have an account?</h1>
            <Link to={"/Login"}>
              <p className=" underline font-semibold">
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
