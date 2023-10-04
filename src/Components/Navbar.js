import React from 'react'
import { FaHome, FaMobileAlt ,FaSignInAlt, FaShoppingCart, FaUserCog } from 'react-icons/fa';

// Import other FontAwesome icons as needed

import { Link } from 'react-router-dom'
import "./Navbar.css"
export const Navbar = () => {
  return (
    <> <div className='navbar'>
      <h1 style={{  display: "flex", alignItems:"center"}}><FaMobileAlt/>PhoneArmor</h1> 
       <Link  to={"/"}  > <FaHome />  Home</Link>
       <Link  to={"/login"}><FaSignInAlt />Login</Link>
      
       <Link  to={"cart"}><FaShoppingCart />Cart</Link>
       <Link  to={"/admin"}><FaUserCog /> Admin</Link>
       </div>
    </>
  )
}
