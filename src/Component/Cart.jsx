
import Header from './Header'
import Footer from './Footer'
import { useShoppingCart } from './Context/ShoppingCartContext'
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import { PaystackButton } from 'react-paystack'


const Cart = () => {
  const { inc, dec, del, cartItems, totalVal } = useShoppingCart();
  const { currentUser } = useContext(AuthContext)

  const publicKey = "pk_live_9c4b3db8b8acee975dcf4332c8c49b8325cf8640";
  const name = "Paul";
  const email = currentUser.email;
  const amount = totalVal * 100;

  const com = {
    name,
    amount,
    email,
    publicKey,
    text: "CheckOut",
    onSuccess: async() => {
    alert("Paid")
    },
    onClose: () => alert("Transaction Unsuccessful")
  }

  return (
    <>
      <Header/>
      <div className='lg:mx-40 mt-20 mb-80 pb-10 px-5' >
        {
          cartItems.map((product) => {
            if(cartItems[product.id] !== 0){
              return(
                <div key={product.id} className='lg:flex grid items-center shadow mb-5 p-5 justify-between' >
                  <div className='flex items-center'>
                    <img className='w-20 h-20 object-cover ' src={product.photoURL[2]} alt="" />
                    <div className='grid pl-5'>
                      <h1 className='font-semibold'>{product.Title}</h1>
                      <p className=''>₦{Intl.NumberFormat().format(product.Price)}</p>
                    </div>
                  </div>
                  <div className='flex gap-10 pt-5'>
                    <button  onClick={() => del(product)} className='bg-Pink px-5 py-2 text-sm font-semibold text-White rounded'>Remove</button>
                    <div className=' flex'>
                      <button className='bg-Grey px-2 rounded text-White font-bold' onClick={()=> dec(product)}>-</button>
                      <p className='px-5'>{product.qty}</p>
                      <button className='bg-Grey px-2 rounded text-White font-bold' onClick={()=> inc(product)}>+</button>
                    </div>
                  </div>
                </div>
              )
            }
          })
        }
        <div className='flex justify-between'>
          <h1 className='font-semibold'>Total Price: {totalVal}</h1>
          <PaystackButton {... com} className='bg-Pink px-5 py-2 text-sm font-semibold text-White rounded'/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart