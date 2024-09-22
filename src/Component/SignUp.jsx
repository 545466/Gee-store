import { auth, storage, db } from "../config/firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import photo from "../assets/images/photo.png"
import hide from "../assets/images/hide.png"
import show from "../assets/images/show.png"
import google from '../assets/svg/google.svg'


import { addDoc, collection } from "firebase/firestore";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("")
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()
  const pop = async() =>{
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
    navigate("/login")
 }
  // const SignUp = async (e) => {
  //   e.preventDefault()
    
    const SignUp = async(e) =>{
      e.preventDefault()
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const metadata = {
          contentType: 'image/jpeg'
        };
        
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
  
      uploadTask.on(
          (error) => {
              console.log(error)
          }, 
          () => {
          const productCollectionRef = collection(db, "Users") 
          getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
              await addDoc(productCollectionRef, { uid: res.user.uid,
                name: name,
                email: email,
                photoURL: downloadURL })
              navigate("/login")
          });
      })
    }
    
    
    
  //   const metadata = {
  //     contentType: 'image/jpeg'
  //   };
  //   const storageRef = ref(storage, `userImg/${file.name}`);
  //   const uploadTask = uploadBytesResumable(storageRef, file, metadata);
  //   uploadTask.on(
  //     (error) => {
  //       console.log(error)
  //     }, 
  //     () => {
  //       const userCollectionRef = collection(db, "Users") 
  //       getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
  //         await addDoc(userCollectionRef, {
  //           uid: res.user.uid,
  //           name: name,
  //           email: email,
  //           photoURL: downloadURL,
  //         });
  //         navigate("/login")
  //       });
  //     })
  // };

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
          <div className='w-full flex justify-center gap-3 py-2 border-[.1rem] rounded my-5'>
              <img src={google} alt="" />
              <button onClick={pop} className=''>Signup with Google</button>
            </div>
          <p>Enter your details below</p>
          <div className="pt-5 pb-5 w-[300px] grid">
            <input
              className="border-[.1rem] rounded px-2 mb-5 pb-2 outline-none py-2 flex items-center border-Grey"
              onChange={(e) => setName(e.target.value)}
              type="text"
              name=""
              placeholder="Full-Name"
            />
            <input
              className="border-[.1rem] rounded px-2 mb-5 pb-2 outline-none py-2 flex items-center border-Grey"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name=""
              placeholder="Email"
            />
            <div className="border-[.1rem] rounded px-2 mb-5 pb-2 outline-none py-2 justify-between flex items-center border-Grey">
              <input
                className=" outline-none flex items-center"
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword  ? "text" : "password"}
                placeholder="Password"
              />
             <img className='w-[1.3rem] h-[1.3rem]' src={showPassword ? hide : show} onClick={() => setShowPassword((prev) => !prev)}></img>
            </div>
          </div>
          <input onChange={(e) => {setFile(e.target.files[0])}} className="hidden" type="file" name="" id="file" />
          <label className="flex cursor-pointer mb-5 font-semibold gap-3 items-center" htmlFor="file">
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
