import Admin from "./Admin"
import { useEffect, useState } from "react"
import { db } from '../../config/firebase'
// import { updateProfile } from 'firebase/auth'
import { getDocs,   collection, deleteDoc, doc, } from 'firebase/firestore'
import search from "../../assets/svg/search.svg"
import { Link } from "react-router-dom"

// import { v4 } from 'uuid'
const Product = () => {
  const [product, setProduct] = useState([])
  const [searchs, setSearchs] = useState("")
  
  useEffect(() => {
    const getProduct = async () => {
      try{
        // const q = query(productCollectionRef, orderBy("", 'asc'))
        const productCollectionRef = collection(db, "Product") 
        const data = await getDocs(productCollectionRef);
        const filData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        setProduct(filData)
        console.error(filData.length)
      } catch (err){
        console.error(err)
      }
    };
    getProduct();
  }, []);

  const deleteProd = async (prodId) => {
    await deleteDoc(doc(db, "Product", prodId))
    setProduct(product.filter((item) => item.id !== prodId))
  }
  
          
  // const getProduct = async() => {
  //   try{
  //     // const q = query(productCollectionRef, orderBy("", 'asc'))
  //     const productCollectionRef = collection(db, "Product") 
  //     const data = await getDocs(productCollectionRef);
  //     const filData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
  //     setProduct(filData)
  //   } catch (err){
  //     console.error(err)
  //   }
  // };
  // getProduct();
  
  return (
    <>
      <section className="flex">
      <Admin/>
      <div className="flex w-full flex-col">
              <div className="w-full flex flex-col p-10 ">
                <span className="flex items-center justify-between">
                  <div className="border-[.1rem]  items-center rounded pr-4 lg:w-[16rem] w-[10rem] h-[2.5rem] flex ">
                    <input onChange={(e) => {setSearchs(e.target.value)}} className="w-[12rem] outline-none border-none mx-4" type="text" />
                    <img className="w-[1.2rem]" src={search} alt="" />
                  </div>
                  <Link className="bg-Black py-2 px-5 text-White text-[1.2rem] rounded font-semibold" to={'/AddProduct'}>Add New</Link>
                </span>
                <div>
                  <table className="w-full border mt-10">
                    <thead>
                      <tr className="border-b font-semibold text-[1.2rem]">
                        <td className="py-3 pl-5">Product Id</td>
                        <td className="">Image</td>
                        <td className="">Product Name</td>
                        <td className="">Category</td>
                        <td className="">Price</td>
                        <td className="">Action</td>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      product?.filter((prod) => {
                        return searchs.toLowerCase() === "" ? prod : prod.Title.toLowerCase().include(searchs)
                      }).map((prod) => {
                        return(
                          <tr key={prod.id} className="border-b text-[1.2rem] gap-3" {...prod}>
                            <td className="py-5 w-[20rem] pl-5 pr-5">{prod.id.substring(0, 20)}</td>
                            <td><img className="h-[3rem] object-cover w-[3rem] rounded-full" src={prod.photoURL} alt="img" /></td>
                            <td className="">{prod.Title}</td>
                            <td className="">{prod.Category}</td>
                            <td className="">₦{prod.Price}</td>
                            <td onClick={() => deleteProd(prod.id)} className=""><button className="py-2 px-5 text-White bg-Pink rounded">Delete</button></td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              </div>
      </section>
    </>
  )
}

export default Product