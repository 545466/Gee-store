import { db, storage } from '../config/firebase'
import { useEffect, useState } from 'react'
import { updateProfile } from 'firebase/auth'
import { getDocs, collection, addDoc, orderBy, query } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import Header from './Header'
import Footer from './Footer'
import { v4 } from 'uuid'


const Admin = () => {
  const [product, setProduct] = useState([])
  const [newTitle, setNewTitle] = useState("")
  const [newPrice, setNewPrice] = useState("")
  const [newCategory, setNewCategory] = useState("")
  const [image, setImage] = useState(null)

  useEffect(() => {
    const getProduct = async () => {
      try{
        // const q = query(productCollectionRef, orderBy("", 'asc'))
        const productCollectionRef = collection(db, "Product") 
        const data = await getDocs(productCollectionRef);
        const filData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        setProduct(filData)
      } catch (err){
        console.error(err)
      }
    };
    getProduct();
  }, []);

  

  const onSubmit = async (e) => {
    e.preventDefault()
    const storageRef = ref(storage, "name");
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      (error) => {
        console.log(error)
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
            await addDoc(productCollectionRef, { Title: newTitle, Price: newPrice, Category: newCategory, photoURL:downloadURL })
        });
      })
  };

  
  
    return (
      <>
      <Header/>
      <div className='items-center mt-10 flex flex-col'>
        {
        product.map((prod) => {
          return(
            <div key={prod.id}>
              <h1>{prod.Title}</h1>
              <img src={prod.photoURL} alt="" />
            </div>
          )
        })
      }
            <div className='gap-5  '>
              <div className='grid gap-3'>
                <label className='font-semibold'>Product Name <span className='text-Pink'>*</span></label>
                <input className='lg:w-[500px] w-2/4 outline-none font-semibold text-xl border-Grey pl-3 h-14 rounded border' placeholder="Product Name" type="text" onChange={(e) => setNewTitle(e.target.value)} />
              </div>
              <div className='grid gap-3'>  
                <label className='font-semibold pt-5'>Product Price <span className='text-Pink'>*</span></label>
                <input className='lg:w-[500px] outline-none font-semibold text-xl border-Grey pl-3 h-14 rounded border' placeholder="Product Price" type="text" onChange={(e) => setNewPrice(e.target.value)} />
              </div>
              <div className='grid gap-3'>
                <label className='font-semibold pt-5'>Product Category <span className='text-Pink'>*</span></label>
                <input className='lg:w-[500px] outline-none font-semibold text-xl border-Grey pl-3 h-14 rounded border' placeholder="Product Category" type="text" onChange={(e) => setNewCategory(e.target.value)} />
              </div>
              <div className='grid pt-5 gap-3'>
                <input className='' type="file" onChange={(e) => {setImage(e.target.files[0])}} />
              </div>
            </div>
            <button className='w-[500px] mt-5 bg-Pink h-14 font-semibold text-xl text-White rounded' type='submit' onSubmit={onSubmit()}>Submit</button>
      </div>  
      <Footer/>
      </>
    )
};

export default Admin