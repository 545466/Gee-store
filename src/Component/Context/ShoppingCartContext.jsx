import { db } from "../config/firebase";
import { AuthContext } from "./AuthContext";
import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { collection, deleteDoc, addDoc, query, where, doc, updateDoc, getDocs } from "firebase/firestore";

const ShoppingCartContext = createContext({});


export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext)
  const [cartItems, setCartItems] = useState([]);
  const[cart, setCart] = useState([])
  const [searchParams, setSearchParams] = useState("");
  

  useEffect(()=>{
    onAuthStateChanged(auth, async(user) => {
      if (user) {
        const currentUserUid = user.uid;
    
        // Filter based on UID 
        const q = query(collection(db, "Cart"), where("Userid", "==", currentUserUid));
        const data = await getDocs(q)
        const Prod = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        setCartItems(Prod);
      } else {
        // User is not signed in
        console.log("User is not signed in");
      }
    });
  },)
  

  const cartQty = 3

  const [totalVal, setTotalVal] = useState(0)
  
  useEffect(() => {
    let total = 0;
    cartItems.forEach(cartItem => {
      total += cartItem.TotalProductPrice;
    });
    setTotalVal(total);
  }, [cartItems]);


//   function getItemsQty(id) {
//     return cartItems.find((item) => item.id === id)?.quantity || 0;
//   }

  useEffect(()=>{
    const getProd = async() => {
      const ref = collection(db,"Product")
      const data = await getDocs(ref)
      const Prod = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setCart(Prod)
    }
    getProd()
  },[])


  let Product;
  const add = async(cart) =>{
    Product=cart;
    Product['qty']=1;
    Product['Userid'] = currentUser.uid;
    Product['TotalProductPrice'] = Product.qty*Product.Price; 
    const ref = collection(db, "Cart")
    await addDoc(ref, Product)
  }

  const inc = async(cart) =>{
    Product=cart;
    Product.qty=Product.qty+1;
    Product.TotalProductPrice=Product.qty*Product.Price;
    const ref = collection(db, "Cart");
    const updateref = doc(ref, Product.id)
    await updateDoc(updateref, Product);
  }

  const dec = async(cart) =>{
    Product=cart;
    Product.qty=Product.qty-1;
    Product.TotalProductPrice=Product.qty*Product.Price;
    if(Product.qty > 1){
      const ref = collection(db, "Cart");
      const updateref = doc(ref, Product.id)
      await updateDoc(updateref, Product);
    }
  }

  const del = async(prodId) => {
    await deleteDoc(doc(db, "Cart", prodId))
    setCart(cart.filter((item) => item.id !== prodId))
  }

  
  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        cartItems,
        cartQty,
        totalVal,
        searchParams,
        setSearchParams,
        add,
        inc,
        dec,
        del,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
