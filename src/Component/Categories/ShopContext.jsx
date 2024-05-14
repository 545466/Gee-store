import { createContext, useState } from "react"
import Data from "../Data"

export const ShopContext = createContext(null);
const getDefaultCart = () =>{
  let cart = {};
  for (let i = 1; i < Data.length +1; i++){
    cart[i] = 0;
  }
  return cart;
}

export const ShopContextProvider = () => {
  
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemId) =>{
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))
  }
  const contextValue = {cartItems, addToCart}
  console.log(cartItems)
  return (
    <ShopContext.Provider value={{contextValue}}>{Data.map((data) =>{
      return(
        <div key={data.id}>
          {data.Title}
          <button onClick={()=>addToCart(data.id)}>Add</button>
        </div>
      )
    })}</ShopContext.Provider>
  )
}
