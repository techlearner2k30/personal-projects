import React from 'react'
import Nav from './header/nav'
import { AiOutlineShoppingCart } from 'react-icons/ai';




const Header = () => {
  return (
    <header className='flex gap-5 py-8 justify-between items-center'>
        <img src="./assets/Logo.png" alt="logo" />
        <Nav />
        <input type="search" name="search" id="search" className='border-solid border-2 border-gray-100 p-1 rounded-lg'/>
        <div className='circle_wrapper rounded-full'>
            <AiOutlineShoppingCart />
        </div>
        
       
    </header>
  )
}

export default Header;
