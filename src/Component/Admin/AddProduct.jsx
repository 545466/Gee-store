import Admin from "./Admin"
import { useState } from "react"
// import { updateProfile } from 'firebase/auth'
import photo from "../../assets/images/photo.png"
import { db, storage } from '../../config/firebase'
import { ref, getDownloadURL, uploadBytes} from 'firebase/storage'

import { addDoc, getDocs, collection } from 'firebase/firestore'


const AddProduct = () => {
  // const [file, setFile] = useState("")
  // const [newTitle, setNewTitle] = useState("")
  // const [newPrice, setNewPrice] = useState("")
  // const [newCategory, setNewCategory] = useState("")
  // const [product, setProduct] = useState([])
  // const navigate = useNavigate()

  // const getProduct = async () => {
  //   try{
  //     // const q = query(productCollectionRef, orderBy("", 'asc'))
  //     const productCollectionRef = collection(db, "Product") 
  //     const data = await getDocs(productCollectionRef);
  //     const filData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
  //     setProduct(filData)
  //     console.log(filData)
  //   } catch (err){
  //     console.error(err)
  //   }
  // };
  // getProduct();

  // const uploadFile = (e) =>{
  //   e.preventDefault()
  //   const metadata = {
  //       contentType: 'image/jpeg'
  //     };
      
  //   const storageRef = ref(storage, `images/${file.name}`);
  //   const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  //   uploadTask.on(
  //       (error) => {
  //           console.log(error)
  //       }, 
  //       () => {
  //       const productCollectionRef = collection(db, "Product") 
  //       getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
  //           await addDoc(productCollectionRef, { Title: newTitle, Price: newPrice, Category: newCategory, photoURL:downloadURL })
  //           navigate("/Product")
  //       });
  //   })
  // }

  const [file, setFile] = useState([])
  const [newTitle, setNewTitle] = useState("")
  const [newPrice, setNewPrice] = useState("")
  const [newCategory, setNewCategory] = useState("")
  const [newDescription, setNewDescription] = useState("")
  // const [product, setProduct] = useState([])
  // const router = useRouter()
  // const getProduct = async () => {
  //   try{
  //     // const q = query(productCollectionRef, orderBy("", 'asc'))
  //     const productCollectionRef = collection(db, "Product") 
  //     const data = await getDocs(productCollectionRef);
  //     const filData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
  //     setProduct(filData)
  //   } catch (err){
  //     console.error(err)
  //   }
  // };
  // getProduct();


    const uploadFile = async(e) =>{
      e.preventDefault()
      const metadata = {
        contentType: 'image/jpeg'
      };
      // const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      const imageURLList = [];
      for (let i = 0; i < file?.length; i++){
        const image = file[i];
        const storageRef = ref(storage, `images/${image?.name}`);
        await uploadBytes(storageRef, image);
        const url = await getDownloadURL(storageRef);
        imageURLList.push(url)
      }
        const productCollectionRef = collection(db, "Product") 
          await addDoc(productCollectionRef, { Title: newTitle, Price: Number(newPrice), Category: newCategory, photoURL: imageURLList, Description: newDescription, Date: new Date() })

          setNewTitle("");
          setNewCategory("");
          setNewDescription("");
          setNewPrice("");
          setFile([]);
    }
  
  



  return (
    <>
      <section className="flex">
        <Admin/>

        <form
              
              className="mx-auto flex flex-col items-center space-y-4 px-4 pb-8 pt-20 lg:max-w-[70%]"
            >
              <div className="w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                      className="mb-4 size-12 text-primary"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>

                    <p className="mb-2 text-base text-gray-500">
                      <span className="text-Pink font-semibold">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-sm text-gray-500">image (MAX. 10MB)</p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      const newFiles = [];
                      for (let i = 0; i < e.target.files.length; i++){
                        newFiles.push(e.target.files[i])
                      }
                      setFile(newFiles)}}
                    multiple
                    required
                  />
                </label>
              </div>

              <div className="flex flex-wrap gap-4 py-4">
                {file.map((files, index) => {
                  return (
                    <div
                      className="me-3 flex items-center rounded-md bg-gray-200 p-3"
                      key={index}
                    >
                      <p>{files.name}</p>
                      <button
                        className="ms-4 rounded-md bg-red-500 p-2 text-white"
                        type="button"
                        onClick={() =>
                          setFile(file.filter((f) => f.name !== file.name))
                        }
                      >
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="flex cursor-pointer items-center gap-2 lg:justify-between [&_input]:w-1/2 [&_input]:rounded-md [&_input]:border-2 [&_input]:p-3 lg:[&_input]:w-full">
                <input
                  type="text"
                  className="outline-none"
                  placeholder="Product name"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  required
                />
                <input
                  type="text"
                  className="outline-none"
                  placeholder="Product price"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  required
                />
              </div>
              <input
                  type="text"
                  placeholder="Product category"
                  className="border-2 w-full p-3 rounded-md outline-none"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  required
                />
              <textarea
                rows={5}
                className="w-full outline-none resize-none rounded-md border-2 p-3"
                name="description"
                id="description"
                placeholder="Product description"
                required
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              ></textarea>

              <button
                onClick={uploadFile}
                className="w-full cursor-pointer rounded-md bg-Pink py-3 font-semibold text-White"
              >
                Create Product
              </button>
            </form>
      </section>
    </>
  )
}
export default AddProduct