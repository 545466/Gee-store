import { createContext, useEffect, useState } from "react"
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";

  export const DataContext = createContext()
  // eslint-disable-next-line react/prop-types
  export const DataContextProvider = ({ children }) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
          try{
            const productCollectionRef = collection(db, "Product")
            const data = await getDocs(productCollectionRef);
            const filData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
            setProduct(filData)
          } catch (err){
            console.error(err)
          }
        };
        getProduct();
      }, []);

    return (
        <DataContext.Provider value={{product}}>
            {children}
        </DataContext.Provider>
    );
  };
