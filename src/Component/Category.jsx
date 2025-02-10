import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Category = () => {
  const skills = [
    "Fashion",
    "Bag",
    "Accessories",
    "Fragrance",
    "Phone & Tablets",
    "Shoes",
  ];
  //   const ref = useRef(null);
  //   const isInView = useInView(ref, { once: false });
  //   const mainControls = useAnimation();
  //   useEffect(() => {
  //     if (isInView) {
  //       mainControls.start("visible");
  //     }
  //   }, [isInView]);
  return (
    <>
      <section className="lg:px-40 px-5 pt-20">
        <motion.div
          className="grid"
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
          }}
          //   animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="flex">
            <div className="w-3 h-6 rounded bg-Pink"></div>
            <p className="text-Pink  pl-3 font-semibold">Categories</p>
          </div>
          <h1 className="lg:text-3xl py-2 lg:py-5 font-semibold">
            Browse By Category
          </h1>
        </motion.div>
        <motion.div
          className=" grid gap-2 grid-cols-2 lg:grid-cols-3  justify-between font-semibold lg:text-xl mt-10 lg:px-0 items-center rounded  text-White"
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
          }}
          //   animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {skills.map((skill) => {
            return (
              <Link
                key={skill}
                className="hover:bg-Pink hover:text-White bg-White text-Black border-[.1rem] px-4 py-5"
                to={`/${skill}`}
              >
                {skill}
              </Link>
            );
          })}
        </motion.div>
        <div className="w-full  my-20 border-b-2 border-Grey"></div>
        <div className="flex justify-between items-center">
          <div className="grid">
            <div className="flex">
              <div className="w-3 h-6 rounded bg-Pink"></div>
              <p className="text-Pink  pl-3 font-semibold">This Month</p> <br />
            </div>
            <h1 className="lg:text-2xl lg:py-5 font-semibold">
              Best Selling Products
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <Link to={"/Store"}>
              <button className="bg-Pink h-max px-4 lg:px-7 py-3 rounded text-White">
                View All
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
