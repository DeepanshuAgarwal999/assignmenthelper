import React from 'react'
import logo from '/assets/icons/logo.svg'
import { NavLink } from 'react-router-dom'
import { NavItems } from '../../constants/NavItems'
import { Menu, X } from 'lucide-react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <div>
      <header className='bg-primary_100 text-primary py-1 text-sm flex items-center justify-between md:justify-center gap-4 sm:gap-8 px-2'>
        <div className='bg- rounded-2xl bg-secondary border border-primary py-1.5 w-fit text-sm font-semibold px-2'>Limited time Discount</div>
        <h1 className='text-sm max-md:hidden'><span className='font-bold'>20% OFF</span> - For first time user</h1>
        <h2 className='font-semibold max-md:hidden'>USE CODE - <span className='font-bold text-base'> FIRSTIMER007</span></h2>
        <div className='bg-primary rounded-2xl border-2 border-secondary py-1 w-fit text-sm font-semibold px-4 text-secondary'>Claim now</div>
      </header>
      <nav className='px-2 sm:px-10 py-2 bg-primary shadow-Nav_box_Shadow flex items-center justify-between'>
        <div className='flex items-center gap-2 '>
          <img src={logo} alt="assignmentHelper" className='w-10 h-10' />
          <h1 className='text-xl lg:text-2xl text-[#1F1F1F]'>AssignmentHelper</h1>
        </div>
        <ul className=' hidden lg:flex items-center justify-between gap-6 text-[#454545] text-lg xl:text-xl w-[66%] xl:w-[62%] '>
          {NavItems.map((item) => (
            <NavLink to={item.path} key={item.name} className={({ isActive }) => `${isActive && "text-transparent bg-primary_100 bg-clip-text"}`}>
              {item.name}
            </NavLink>
          ))}
        </ul>
        <button className='lg:hidden cursor-pointer' onClick={toggleDrawer}>
          <Menu className='w-7 h-7' />
        </button>
      </nav>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className='relative lg:hidden'
      >
        <div className='bg-primary_100 h-full flex flex-col items-center justify-center gap-10 text-white'> {NavItems.map((item) => (
          <NavLink to={item.path} key={item.name} className={({ isActive }) => `${isActive && "text-primary-100 font-medium"} ${!isActive && "hover:opacity-80 duration-200 ease-in-out"}`}>
            {item.name}
          </NavLink>
        ))}
          <button className='font-medium text-lg text-white absolute top-2 left-2 hover:opacity-65 duration-200 ease-in' onClick={toggleDrawer}><X /></button>
        </div>
      </Drawer>
    </div>
  )
}

export default Navbar