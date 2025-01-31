import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <>
      <section className='lg:px-40 px-5 pt-20'>
        <div className='flex'>
            <div className='w-3 h-6 rounded bg-Pink'></div>
            <p className='text-Pink  pl-3 font-semibold'>Categories</p>
        </div>
        <h1 className='lg:text-3xl py-2 lg:py-5 font-semibold'>Browse By Category</h1>
        <div className=' grid gap-2 grid-cols-2 lg:grid-cols-3  justify-between font-semibold lg:text-xl mt-10 lg:px-0 items-center rounded  text-White'>
            <Link className='hover:bg-Pink hover:text-White bg-White text-Black border-[.1rem] px-4 py-5' to={"/Fashion"}>Fashion</Link>
            <Link className='hover:bg-Pink hover:text-White bg-White text-Black border-[.1rem] px-4 py-5' to={"/Bag"}>Bag</Link>
            <Link className='hover:bg-Pink hover:text-White bg-White text-Black border-[.1rem] px-4 py-5' to={"/Accessories"}>Accessories</Link>
            <Link className='hover:bg-Pink hover:text-White bg-White text-Black border-[.1rem] px-4 py-5' to={"/Fragrance"}>Fragrance</Link>
            <Link className='hover:bg-Pink hover:text-White bg-White text-Black border-[.1rem] px-4 py-5' to={"/Phone"}>Phone & Tablets</Link>
            {/* <Link className='bg-White text-Black border-[.1rem] px-4 py-5' to={"/Sport"}>Sports & Fitness</Link> */}
            <Link className='hover:bg-Pink hover:text-White bg-White text-Black border-[.1rem] px-4 py-5' to={"/Shoe"}>Shoes</Link>
            {/* <div className='px-10 w-max py-5 rounded hover:bg-Pink hover:border-none hover:text-White border-Grey border-2'>
                <FaMobile className='m-auto text-4xl'/>
                <p className='pt-3'>Phones</p>
            </div>
            <div className='px-10 w-max py-5 rounded hover:bg-Pink hover:border-none hover:text-White border-Grey border-2'>
                <FaLaptop className='m-auto text-4xl'/>
                <p className='pt-3'>Computers</p>
            </div>
            <div className='px-10 w-max py-5 rounded hover:bg-Pink hover:border-none hover:text-White border-Grey border-2'>
                <FaCamera className='m-auto text-4xl'/>
                <p className='pt-3'>Camera</p>
            </div>
            <div className='px-10 w-max py-5 rounded hover:bg-Pink hover:border-none hover:text-White border-Grey border-2'>
                <FaHeadphones className='m-auto text-4xl'/>
                <p className='pt-3'>Headphones</p>
            </div>
            <div className='px-10 w-max py-5 rounded hover:bg-Pink hover:border-none hover:text-White border-Grey border-2'>
                <FaGamepad className='m-auto  text-4xl'/>
                <p className='pt-3'>Gamepad</p>
            </div> */}
        </div>
        <div className='w-full  my-20 border-b-2 border-Grey'></div>
        <div className='flex justify-between items-center'>
            <div className='grid'>
                <div className='flex'>
                <div className='w-3 h-6 rounded bg-Pink'></div>
                <p className='text-Pink  pl-3 font-semibold'>This Month</p> <br/>
                </div>
                <h1 className='lg:text-2xl lg:py-5 font-semibold'>Best Selling Products</h1>  
            </div>
            <div className='flex justify-between items-center'> 
                <Link to={"/Store"}>
                    <button className='bg-Pink h-max px-4 lg:px-7 py-3 rounded text-White'>View All</button>
                </Link>
            </div>
        </div>
      </section>
    </>
  )
}

export default Category
