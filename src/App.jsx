import "./App.css";
import SignUp from "./Component/SignUp.jsx";
import Login from "./Component/Login.jsx";
import HomePage from "./Component/HomePage.jsx";
import Fashion from "./Component/Categories/Fashion.jsx";
import Bag from "./Component/Categories/Bag.jsx";
import Shoe from "./Component/Categories/Shoe.jsx";
import Sport from "./Component/Categories/Sport.jsx";
import Fragrance from "./Component/Categories/Fragrance.jsx";
import Accessories from "./Component/Categories/Accessories.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Phone from "./Component/Categories/Phone.jsx";
import ProductDetail from "./Component/Categories/ProductDetail.jsx";
// import { ShopContextProvider } from "./Component/Categories/ShopContext.jsx";
import { createContext, useState } from "react"
import Data from './Component/Data.js'
import Cart from "./Component/Cart.jsx";
import Contact from "./Component/Contact.jsx";
import Admin from "./Component/Admin.jsx";

export const AppContext = createContext(null);

function App() {
  const getDefaultCart = () =>{
    let cart = [];
    for (let i = 1; i < Data.length + 1; i++){
      cart[i] = 0;
    }
    return cart;
  }
  // export const ShopContextProvider = () => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const addToCart = (itemId) =>{
      setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))
    }
    const removeFromCart = (itemId) =>{
      setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
    }
  // const contextValue = 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },{
      path: "/Admin",
      element: <Admin />,
    },
    {
      path: "/SignUp",
      element: <SignUp />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Fashion",
      element: <Fashion />,
    },
    {
      path: "/Bag",
      element: <Bag />,
    },{
      path: "/Shoe",
      element: <Shoe />,
    },{
      path: "/Sport",
      element: <Sport />,
    },{
      path: "/Fragrance",
      element: <Fragrance />
    },{
      path: "/Accessories",
      element: <Accessories />
    },{
      path: "/Phone",
      element: <Phone />
    },{
      path: "/ProductDetail/:name",
      element: <ProductDetail />
    },{
      path: "/cart",
      element: <Cart />
    }
  ]);

  return (
    <>
      <AppContext.Provider value={{cartItems, addToCart, removeFromCart}}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </>
  );
}

export default App;
