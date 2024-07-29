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
      <div className='lg:mx-40 mt-20 mb-80 pb-10' >
        {
          Data.map((product) => {
            if(cartItems[product.id] !== 0){
              return(
                <div key={product.id} className='flex items-center shadow mb-5 p-5 justify-between' >
                  <div className='flex items-center'>
                    <img className='w-20 h-20 object-cover ' src={product.Image} alt="" />
                    <h1 className='pl-3'>{product.Title}</h1>
                  </div>
                  <p className='pr-3'>{product.Price}</p>
                  <div className='flex items-center px-5 pt-1 shadow rounded'>
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
      <Footer />
    </>
  )
}

export default Cart