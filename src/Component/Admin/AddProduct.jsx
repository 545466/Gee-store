import Admin from "./Admin"
import { useState } from "react"
// import { updateProfile } from 'firebase/auth'
import photo from "../../assets/images/photo.png"
import { useNavigate } from "react-router-dom"

import { db, storage } from '../../config/firebase'
import { uploadBytesResumable, ref, getDownloadURL} from 'firebase/storage'
import { addDoc, getDocs, collection } from 'firebase/firestore'


const AddProduct = () => {
  const [file, setFile] = useState("")
  const [newTitle, setNewTitle] = useState("")
  const [newPrice, setNewPrice] = useState("")
  const [newCategory, setNewCategory] = useState("")
  const [product, setProduct] = useState([])
  const navigate = useNavigate()

  const getProduct = async () => {
    try{
      // const q = query(productCollectionRef, orderBy("", 'asc'))
      const productCollectionRef = collection(db, "Product") 
      const data = await getDocs(productCollectionRef);
      const filData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setProduct(filData)
      console.log(filData)
    } catch (err){
      console.error(err)
    }
  };
  getProduct();

  const uploadFile = (e) =>{
    e.preventDefault()
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
        const productCollectionRef = collection(db, "Product") 
        getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
            await addDoc(productCollectionRef, { Title: newTitle, Price: newPrice, Category: newCategory, photoURL:downloadURL })
            navigate("/Product")
        });
    })
  }
  
  



  return (
    <>
      <section className="flex">
        <Admin/>
        <div className="gap-5 my-auto mx-auto">
          <div className="grid gap-3">
            <label className='font-semibold text-[1rem] lg:text-[1.3rem]'>Product Name <span className='text-Pink'>*</span></label>
            <input className='lg:w-[500px] w-[320px] outline-none font-semibold text-xl border-Grey pl-3 h-14 rounded border' placeholder="Product Name" type="text" onChange={(e) => setNewTitle(e.target.value)} />
          </div>
          <div className='grid gap-3'>  
            <label className='font-semibold text-[1rem] lg:text-[1.3rem] pt-5'>Product Price <span className='text-Pink'>*</span></label>
            <input className='lg:w-[500px] w-[320px] outline-none font-semibold text-xl border-Grey pl-3 h-14 rounded border' placeholder="Product Price" type="text" onChange={(e) => setNewPrice(e.target.value)} />
            </div>
            <div className='grid gap-3'>
            <label className='font-semibold text-[1rem] lg:text-[1.3rem] pt-5'>Product Category <span className='text-Pink'>*</span></label>
            <input className='lg:w-[500px] w-[320px] outline-none font-semibold text-xl border-Grey pl-3 h-14 rounded border' placeholder="Product Category" type="text" onChange={(e) => setNewCategory(e.target.value)} />
            </div>
          {/* <input type="file" name="" id="" onChange={(e) => {setFile(e.target.files[0])}} /> */}
          <div className='grid pt-5 gap-3'>
            <input onChange={(e) => {setFile(e.target.files[0])}} className="hidden" type="file" name="" id="file" />
            <label  className="flex cursor-pointer mb-5 text-[1rem] lg:text-[1.3rem] font-semibold gap-3 items-center" htmlFor="file">
              <img className="w-10" src={photo} alt="" />
              <p >Add your Avater</p>
            </label>
          </div>
          <button className='lg:w-[500px] w-[320px] bg-Pink h-14 font-semibold text-xl text-White rounded' onClick={uploadFile}>Upload File</button>
        </div>
      </section>
        {
                product.map((prod) => {
                  return(
                    <div key={prod.id} className="flex gap-5 items-center">
                        <img src={prod.photoURL} alt="hsh"  />
                      {/* <Image width={100} height={100} alt='image' src={prod.photoURL} /> */}
                    </div>
                  )
                })}
    </>
  )
}
//   return (
//     <>
//     <section className="flex">
//       <Admin/>
//             <div className="mx-auto my-auto">
//               <div className='gap-5'>
//                 <div className='grid gap-3'>
//                   <label className='font-semibold'>Product Name <span className='text-Pink'>*</span></label>
//                   <input className='lg:w-[500px] w-[320px] outline-none font-semibold text-xl border-Grey pl-3 h-14 rounded border' placeholder="Product Name" type="text" onChange={(e) => setNewTitle(e.target.value)} />
//                 </div>
//                 <div className='grid gap-3'>  
//                   <label className='font-semibold pt-5'>Product Price <span className='text-Pink'>*</span></label>
//                   <input className='lg:w-[500px] w-[320px] outline-none font-semibold text-xl border-Grey pl-3 h-14 rounded border' placeholder="Product Price" type="text" onChange={(e) => setNewPrice(e.target.value)} />
//                 </div>
//                 <div className='grid gap-3'>
//                   <label className='font-semibold pt-5'>Product Category <span className='text-Pink'>*</span></label>
//                   <input className='lg:w-[500px] w-[320px] outline-none font-semibold text-xl border-Grey pl-3 h-14 rounded border' placeholder="Product Category" type="text" onChange={(e) => setNewCategory(e.target.value)} />
//                 </div>
//                 <div className='grid pt-5 gap-3'>
//                   <input className="hidden" type="file" name="" id="file" />
//                   <label onChange={(e) => {setFile(e.target.files[0])}} className="flex cursor-pointer mb-5 font-semibold gap-3 items-center" htmlFor="file">
//                     <img className="w-10" src={photo} alt="" />
//                     <p >Add your Avater</p>
//                   </label>
//                 </div>
//               </div>
//               <button className='lg:w-[500px] w-[320px] bg-Pink h-14 font-semibold text-xl text-White rounded' type='submit' onClick={uploadFile}>Submit</button>
//             </div>
//       </section>
//     </>
//   )
// }

export default AddProduct