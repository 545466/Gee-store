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
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Phone from "./Component/Categories/Phone.jsx";
import ProductDetail from "./Component/Categories/ProductDetail.jsx";
// import { ShopContextProvider } from "./Component/Categories/ShopContext.jsx";
import { createContext, useContext, useState } from "react"
import Data from './Component/Data.js'
import Cart from "./Component/Cart.jsx";
import Contact from "./Component/Contact.jsx";
import Admin from "./Component/Admin/Admin.jsx";
import Sidebar from "./Component/Admin/Sidebar.jsx";
import { AuthContext } from "./Component/Context/AuthContext.jsx";
import Store from "./Component/Store.jsx";
import Dashboard from "./Component/Admin/Dashboard.jsx";
import AddProduct from "./Component/Admin/AddProduct.jsx";
import Product from "./Component/Admin/Product.jsx";
import User from "./Component/Admin/user";
import Details from "./Component/Settings/Details.jsx";
import Password from "./Component/Settings/Password.jsx";
import Settings from "./Component/Settings/Settings.jsx";

import Account from "./Component/Settings/Account.jsx";
import Delivery from "./Component/Settings/Delivery.jsx";

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
  const { currentUser } = useContext(AuthContext);
  // eslint-disable-next-line react/prop-types
  const ProtectedRoute = ({ children }) =>{
    if(!currentUser){
      return <Navigate to="/Login"/>
    }
    
    return children
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage /> ,
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
      path: "/Settings",
      element: <Settings/>
     },
     {
      path: "/Settings/Delivery",
      element: <Delivery/>
     },
    {
      path: "/Settings/Details",
      element: <Details />,
    },
    {
      path: "/Settings/account",
      element: <Account />,
    },
    {
      path: "/Settings/password",
      element: <Password />,
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
      path: "/Store",
      element: <Store />
    },{
      path: "/Sidebar",
      element: <Sidebar />
    },{
      path: "/Dashboard",
      element: <Dashboard/>
    },{
      path: "/AddProduct",
      element: <AddProduct />
    },{
      path: "/Product/",
      element: <Product/>
    },{
      path: "/user",
      element: <User/>
    },{
      path: "/cart",
      element: <ProtectedRoute> <Cart /> </ProtectedRoute> 
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
