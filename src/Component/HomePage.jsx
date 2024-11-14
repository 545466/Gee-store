import Header from './Header'
import Hero from './Hero'
import Category from './Category'
import {Link} from 'react-router-dom'
import Data from '../Component/Data'
import { useContext, useState } from 'react'
import { AppContext } from '../App'
import { AuthContext } from './Context/AuthContext'
import Footer from './Footer'
// import Admin from './Admin'


const HomePage = () => {
   const [product, setProduct] = useState([])
   const [newTitle, setNewTitle] = useState("")
   const [newPrice, setNewPrice] = useState("")
   const productCollectionRef = collection(db, "Product")
   useEffect(() => {
     const getProduct = async () => {
       try{
         const data = await getDocs(productCollectionRef);
         const filData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
         setProduct(filData)
       } catch (err){
         console.error(err)
       }
     };
     getProduct();
   }, []);
   const onSubmit = async () => {
     await addDoc(productCollectionRef, { Title: newTitle, Price: newPrice })
 }
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)
  
  const {addToCart} = useContext(AppContext)
  return (
    <>
      <Header/>
      <Hero/>
      <Category/>
      <div className='grid grid-cols-2 lg:grid-cols-4  gap-5 px-5 lg:px-20'>
      {
        product.slice(0, 4).map((Products)=>{
          return(
            <div className='bg-Gray shadow mt-10 ' key={Products.id} >
              <Link to={`/ProductDetail/${Products.Title.toLowerCase()}`}>
                  <img className="w-full lg:h-[18rem] h-40 object-cover" src={Products.Image} alt="" />
                </Link>
              <div className='grid pt-5 '>
              <h1 className='font-semibold pl-2 lg:text-[1rem] text-[.8rem]'>{Products.Title}</h1>
              <p className='text-Pink font-semibold pl-2 lg:text-[1rem] text-[.8rem] lg:py-5 py-2'>{Products.Price}</p>
              <button onClick={() => addToCart(Products.id)} className='bg-Pink lg:text-[1rem] text-[.8rem] text-White py-2'>Add to Cart</button>
              </div>
            </div>
          )
        })
      }
      </div>
      {/* {
        product.map((prod) => {
          return(
            <div key={prod.id}>
              <h1>{prod.Title}</h1>
            </div>
          )
        })
      }
      <input placeholder="Product Title" type="text" onChange={(e) => setNewTitle(e.target.value)} />
            <input placeholder="Product Price" type="text" onChange={(e) => setNewPrice(e.target.value)} />
            <button type='submit' onSubmit={onSubmit()}>Submit</button> */}
            {/* <Admin/> */}
      <Footer/>
    </>
  )
}

export default HomePage
