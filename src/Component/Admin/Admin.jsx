// import { db, storage } from '../../config/firebase'
// import { useEffect, useState } from 'react'
// // import { updateProfile } from 'firebase/auth'
// import { getDocs, collection, addDoc } from 'firebase/firestore'
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
// import Header from '../Header'
// import Footer from '../Footer'
// import { v4 } from 'uuid'
import { useState } from "react"

import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "./Dashboard";


const Admin = () => {
  const [open, setOpen] = useState(false)
  
    return (
      <>
      <main className="h-screen">
        <section className="flex">
          <Sidebar open = {open} />
          <span className="w-full">
            <Header open = {open} setOpen = {setOpen}/>
            <Dashboard/>
          </span>
        </section>
      </main>
      </>
    )
};

export default Admin