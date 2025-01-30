import Footer from './Footer';
import Header from './Header';
import { AppContext } from '../App';
import { useContext } from 'react';
import { DataContext } from './Context/DataContext';
import { Link } from 'react-router-dom';
const Store = () => {
  const {addToCart} = useContext(AppContext)
  const { product } = useContext(DataContext)


  return (
    <>
        <Header/>
        <section className='px-5 py-10'>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:px-40">
          {product.map((prod) => {
            return (
              <div className="bg-Gray shadow " key={prod}>
              <Link to={`/ProductDetail/${prod.id.toLowerCase()}`}>
                <img className="w-full lg:h-60 h-40 object-cover" src={prod.photoURL} alt="" />
              </Link>
                <div className="grid lg:pt-5 pt-2 ">
                  <h1 className="font-semibold pl-2 lg:text-[1rem] text-[.8rem]">{prod.Title}</h1>
                  <p className="text-Pink font-semibold pl-2 lg:text-[1rem] text-[.8rem] lg:py-5 py-2">{prod.Price}</p>
                  <button onClick={() => addToCart(prod.id)} className="bg-Pink text-[.8rem] text-White py-2 ">
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        </section>
        <Footer/>
    </>
  )
}

export default Store