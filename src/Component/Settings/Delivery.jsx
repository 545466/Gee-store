import { useContext, useEffect, useState } from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import { db } from '../../config/firebase'
import { auth } from '../../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, updateDoc, where, getDocs, query, collection } from 'firebase/firestore'
import { AuthContext } from '../Context/AuthContext'

const Delivery = () => {
    const [address, setAddress ] = useState("")
    const [users, setUsers] = useState("")

    const { currentUser } = useContext(AuthContext)

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const currentUserUid = user.uid;
        
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


    const Add = async (e) => {
            e.preventDefault()
            // const currentUserUid = user.uid;
            // const q = query(collection(db, "Users" ), where("uid", "==", currentUserUid));
            // const docRef = doc(db, "Users", currentUserUid)
            const dbref = collection(db, "Users")
            const updateRef = doc(dbref, currentUser.id)
            await updateDoc(updateRef, {deliveryAddress: address, name: name, location: location, uid: currentUser.uid})
    }
  return (
    <>
     <Header/>
     <section className='w-4/5 mx-auto pt-10'> 
            <Link className="bg-Black py-1 w-max text-White px-3 rounded " to={"/Settings"}>Back</Link>
            <div className="grid mt-3 pt-5 ">
                <label htmlFor="">Delivery Address</label>
                <input placeholder={users.deliveryAddress} onChange={(e) => setAddress(e.target.value)} className="border-Grey border-[.1rem] mt-2 pl-3 py-1 rounded outline-none" type="text"/>
            </div>
            <button onClick={Add} className="bg-Pink flex mx-auto w-full mt-5 justify-center rounded py-2 items-center text-White">Save Changes</button>

     </section> 
    </>
  )
}

export default Delivery
