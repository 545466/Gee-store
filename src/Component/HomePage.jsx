import Header from './Header'
import Hero from './Hero'
import Category from './Category'
import {Link} from 'react-router-dom'
import Data from '../Component/Data'
import { useContext } from 'react'
import { AppContext } from '../App'
import Footer from './Footer'
import Admin from './Admin'

const HomePage = () => {
//   const [product, setProduct] = useState([])
//   const [newTitle, setNewTitle] = useState("")
//   const [newPrice, setNewPrice] = useState("")
//   const productCollectionRef = collection(db, "Product")
//   useEffect(() => {
//     const getProduct = async () => {
//       try{
//         const data = await getDocs(productCollectionRef);
//         const filData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
//         setProduct(filData)
//       } catch (err){
//         console.error(err)
//       }
//     };
//     getProduct();
//   }, []);
//   const onSubmit = async () => {
//     await addDoc(productCollectionRef, { Title: newTitle, Price: newPrice })
// }
  
  const {addToCart} = useContext(AppContext)
  return (
    <>
      <Header/>
      <Hero/>
      <Category/>
      <div className='grid grid-cols-1 lg:grid-cols-4  gap-5 px-10 lg:px-40'>
      {
        Data.slice(0, 4).map((Products)=>{
          return(
            <div className='bg-Gray shadow mt-10 ' key={Products.id} >
              <Link to={`/ProductDetail/${Products.Title.toLowerCase()}`}>
                  <img className="w-full h-60 object-cover" src={Products.Image} alt="" />
                </Link>
              <div className='grid pt-5 px-5'>
              <h1 className='font-semibold'>{Products.Title}</h1>
              <p className='text-Pink font-semibold py-5'>{Products.Price}</p>
              <button onClick={() => addToCart(Products.id)} className='bg-Pink text-White py-2 mb-5'>Add to Cart</button>
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
