import { getDocs, doc, updateDoc, query, where, collection, } from "firebase/firestore"
import { db} from "../../config/firebase"
import { useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
const Details = () => {
const [users, setUsers] = useState("")
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [location, setLocation] = useState("");


useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const currentUserUid = user.uid;
        console.log(user)
    
        // Filter based on UID (or email, if preferred)
        const q = query(collection(db, "Users"), where("uid", "==", currentUserUid));
        getDocs(q)
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              // Process the retrieved data
            // const filData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))

              const userData = ({id:doc.id, ...doc.data()});
              setUsers(userData);
            });
          })
          .catch((error) => {
            console.error("Error getting documents: ", error);
          });
      } else {
        // User is not signed in
        console.log("User is not signed in");
      }
    });

},)
const updateProfile = async (e) => {
    e.preventDefault()
    // const currentUserUid = user.uid;
    // const q = query(collection(db, "Users" ), where("uid", "==", currentUserUid));
    // const docRef = doc(db, "Users", currentUserUid)
    const updates ={}
    if(name && name.trim() !== ""){
      updates.name = name;
    }else{
      console.log("Name is empty")
    }
    if(email && email.trim() !== ""){
      updates.email = email;
    }else{
      console.log("email is empty")
    }
    if(location && location.trim() !== ""){
      updates.location = location;
    }else{
      console.log("Location is empty")
    }
    // if(downloadURL && downloadURL.trim() !== ""){
    //   updates.UserPics = downloadURL;
    // }else{
    //   console.log("Location is empty")
    // }
    const dbref = collection(db, "Users")
    const updateRef = doc(dbref, users.id)
    const result = await updateDoc(updateRef, updates)
   console.log(result)
}

const auth = getAuth();
  return (
    <>
      <Header/>
      <section className="pt-5 w-4/5 mx-auto">
        <Link className="bg-Black py-1 w-max text-White px-3 rounded " to={"/Settings"}>Back</Link>
        <h1 className="font-bold pt-10 pl-10 text-xl ">Update Profile</h1>
        <div className="my-[2rem] flex justify-center mx-auto">
          <img className="w-[7rem] h-[7rem] flex items-center justify-center relative rounded-full border-[.1rem]" src={users.photoURL} alt="Profile" />
          {/* <img className="w-[2.5rem] h-[2.5rem] bg-White border-[.1rem] rounded-full text-white p-2 absolute bottom-3/4 right-[7.5rem]" src={img} alt="edit" /> */}
        </div>
        <form action="">
            <div className="grid ">
                <label htmlFor="">FullName</label>
                <input placeholder={users.name} onChange={(e) => setName(e.target.value)} className="border-Grey border-[.1rem] mt-2 pl-3 py-1 rounded outline-none" type="text"/>
            </div>
            <div className="grid mt-3 ">
                <label htmlFor="">Email</label>
                <input placeholder={users.email} onChange={(e) => setEmail(e.target.value)} className="border-Grey border-[.1rem] mt-2 pl-3 py-1 rounded outline-none" type="text"/>
            </div>
            <div className="grid mt-3 ">
                <label htmlFor="">Location</label>
                <input placeholder={users.location} onChange={(e) => setLocation(e.target.value)} className="border-Grey border-[.1rem] mt-2 pl-3 py-1 rounded outline-none" type=""/>
            </div>
            <button onClick={updateProfile} className="bg-Pink flex w-full mt-5 justify-center rounded py-2 items-center text-White">Update Profile</button>
        </form>
      </section>
      <Footer/>
    </>
  )
}

export default Details
