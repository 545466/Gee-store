import { useContext} from 'react'
import Data from '../Component/Data'

import { AppContext } from '../App'
import Header from './Header'
import Footer from './Footer'
const Cart = () => {
  const {cartItems, addToCart, removeFromCart} = useContext(AppContext)
  return (
    <>
      <Header/>
      <div className='mx-40 mt-20' >
        {
          Data.map((product) => {
            if(cartItems[product.id] !== 0){
              return(
                <div key={product.id} className='flex shadow mb-5 p-5 justify-between' >
                  <div className='flex'>
                    <img className='w-20' src={product.Image} alt="" />
                    <h1>{product.Title}</h1>
                  </div>
                  <p>{product.Price}</p>
                  <div className='flex px-5 pt-1 shadow rounded'>
                    <button onClick={()=> removeFromCart(product.id)}>-</button>
                    <p className='px-5'>{cartItems[product.id]}</p>
                    <button onClick={()=> addToCart(product.id)}>+</button>
                  </div>
                </div>
              )
            }
          })
        }
      </div>
      <Footer/>
    </>
  )
}

export default Cart