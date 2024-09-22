import { signOut, deleteUser } from "firebase/auth"
import { auth } from "../../config/firebase"
import Header from "../Header"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Link } from "react-router-dom"
const Account = () => {
  const { currentUser } = useContext(AuthContext)
  const deleteUserAccount = async() => {
        await deleteUser(currentUser)
        try{
            console.log("User deleted")
        }catch{
            console.log("An error occured")
        }
  }
  const logOut = async() => {
    await signOut(auth)
  }
  return (
    <>
      <Header/>
      <section className="pt-10 w-4/5 mx-auto">
        <Link className="bg-Black py-1 text-White px-3 rounded " to={"/Settings"}>Back</Link>
        <h1 className="font-semibold pt-10">Delete Account</h1>
        <p className="text-Grey lg:text-xl text-[.7rem]">By deleting your account you will lose all your data</p>
        <button onClick={deleteUserAccount()} className="bg-Grey flex mx-auto w-full mt-5 justify-center rounded py-2 items-center text-White">Delete Account</button>
        <button onClick={logOut()} className="bg-Pink flex mx-auto w-full mt-5 justify-center rounded py-2 items-center text-White">Logout</button>
      </section>
    </>
  )
}

export default Account
