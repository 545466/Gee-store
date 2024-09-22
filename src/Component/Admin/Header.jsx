/* eslint-disable react/prop-types */
import menu from '../../assets/images/menu.svg'

const Header = ({open, setOpen}) => {
  return (
    <>
        <header className="flex py-2 h-[3rem] border-b-[.1rem] justify-between px-5">
            <img className='w-[1.5rem] flex lg:hidden' onClick={() => {setOpen(!open)}} src={menu} alt="" />
        </header>
    </>
  )
}

export default Header