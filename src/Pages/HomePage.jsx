import React from 'react'
import { ProductList } from '../Components/ProductList'
import { Navbar } from '../Components/Navbar'
import { Sidebar } from '../Components/Sidebar'
import "../Components/productlist.css"
import { Frontimg } from '../Components/Frontimg'
export const HomePage = () => {
  return (
    <>
        <Navbar/>
        <div className='home'>
        <Sidebar/>
        <Frontimg/>
        </div>
        <ProductList/>
    </>
    
  )
}
