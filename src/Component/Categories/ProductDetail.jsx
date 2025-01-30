import { useContext, useEffect, useState} from 'react';
import Header from '../Header'
import {  Link, useParams } from "react-router-dom";
import Footer from '../Footer';
import { DataContext } from '../Context/DataContext';
import ImageSwiper from '../ImageSwiper';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { AuthContext } from '../Context/AuthContext';

const ProductDetail = () => {
    const { product } = useContext(DataContext)
    const { currentUser } = useContext(AuthContext)
    const [rating, setRating] = useState("");
    const [comment, setComment] = useState("");
    const [rateProduct, setRateProduct] = useState(false);
    const [productRatings, setProductRatings] = useState([]);


    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);

    const uploadRating = async (e) => {
      e.preventDefault();
      let userName = currentUser.displayName;
  
      try {
        const ref = collection(db, "ratings");
        await addDoc(ref, {
          userName,
          rating,
          comment,
          productId,
          date: new Date(),
        });
  
        alert("You have successfully rated this product");
        setRating("");
        setComment("");
        setRateProduct(false);
  
        // window.location.reload();
      } catch (error) {
        alert("Error adding your rating: " + error.message);
      }
    };


    
    const params = useParams();
    const productId = params.productId;
    const ProductDetails = product.find(
      (Product) => Product.id.toLowerCase() === productId
    )

    const fetchRatings = async () => {
      const ratingsQuery = query(
        collection(db, "ratings"),
        where("productId", "==", productId),
      );
      const ratingsSnapshot = await getDocs(ratingsQuery);
      const ratingsData = ratingsSnapshot?.docs.map((doc) => ({...doc.data()}));
      setProductRatings(ratingsData);
    };
    fetchRatings();
    // console.log(ProductDetails)

  return (
    <>
      <Header />
      <div className='lg:px-40 px-5 pt-10'>
        {
            ProductDetails ? (
                <div className='lg:flex justify-center '>
                    <Link to={"/"} className="bg-Black py-1 w-max text-White px-3 rounded">Back</Link>
                    <div className='pt-10'>
                      <ImageSwiper  images={ProductDetails.photoURL}/>
                    </div>
                    <div className='lg:pl-20 lg:pt-0 pt-5'>
                      <h1 className='lg:text-3xl text-xl font-semibold'>{ProductDetails.Title}</h1>
                      <p className='lg:text-3xl text-Pink py-2 font-semibold'> ₦{Intl.NumberFormat().format(ProductDetails.Price)}</p>
                      <div>
                        <h1 className='font-semibold'>Product Description</h1>
                        <p>{ProductDetails.Description}</p>
                      </div>
                      <p className='pt-5'><span className='font-semibold'>Category: </span>{ProductDetails.Category}</p>
                      <div className='flex py-5 text-White font-semibold gap-3'>
                        <button className='bg-Pink w-full rounded py-3 px-5'>Add to Cart</button>
                      </div>
                      {/* <p> <span className='font-semibold'>Estimated Delivery:</span> Monday, April 8th – Friday, April 12th</p> */}
                    </div>
                </div>
            ) : ""
        }
        <section className="mt-6 space-y-2 lg:block">
              <h2 className="font-semibold lg:text-2xl">Ratings</h2>

              {productRatings.length > 0 ? (
                productRatings.map((rating, index) => (
                  <div
                    key={index}
                    className="min-w-[40%] space-y-2 rounded-md text-White bg-Grey px-4 py-2 lg:w-fit"
                  >
                    <h2 className="space-x-4 text-xl font-semibold">
                      {rating.userName}
                    </h2>
                    <div>
                      {rating.rating},{" "}
                      {rating?.date &&
                        new Date(
                          rating.date?.seconds * 1000,
                        ).toLocaleDateString()}
                    </div>
                    <p>{rating.comment}</p>
                  </div>
                ))
              ) : (
                <p>There are no ratings for this product yet</p>
              )}
            </section>

            <div className="mt-4 flex-col lg:flex lg:w-[70%] lg:gap-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2>Purchased this product yet?</h2>
                <button
                  onClick={() => setRateProduct(true)}
                  className="w-fit rounded-lg bg-Pink px-4 py-2 text-White"
                >
                  Leave a rating
                </button>
              </div>

              {rateProduct && (
                <form
                  onSubmit={(e) => uploadRating(e)}
                  className="flex flex-col gap-2"
                >
                  <select
                    name="rating"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="cursor-pointer rounded-md border border-Grey p-3"
                    required
                  >
                    <option value="" disabled selected hidden>
                      Select a rating
                    </option>
                    <option value="5 - Excellent">5 - Excellent</option>
                    <option value="4 - Good">4 - Good</option>
                    <option value="3 - Average">3 - Average</option>
                    <option value="2 - Bad">2 - Bad</option>
                    <option value="1 - Very Bad">1 - Very Bad</option>
                  </select>

                  <textarea
                    cols={10}
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="resize-none rounded-md border border-gray-400 p-3"
                    placeholder="Describe your experience (optional)"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="rounded-md bg-primary py-3 font-semibold text-white"
                  >
                    Post
                  </button>
                </form>
              )}
            </div>
      </div>
      <Footer/>
    </>
  )
}

export default ProductDetail
