import React, { useCallback, useState } from 'react'
import { addproduct } from '../Redux/ProductReducer/action'
import { useDispatch } from 'react-redux'
import "../App.css"
import { Navbar } from '../Components/Navbar'

const initialstate= {
    image:"",
    title:"",
    price:"",
    model:"",
} 

export const Admin = () => {
     
   //state manangemnt 
   const [product, setproduct]=useState(initialstate)
   const dispatch = useDispatch()
  const  handelsubmit =(e)=>{
       e.preventDefault();
       console.log(product);
      
       dispatch(addproduct(product))
       setproduct(initialstate)
    }

     const handelChange=(e)=>{
        const {name, value}= e.target
       setproduct((prev)=>{
            return {...prev, [name]:name=="price"?+value:value}
       })
         
    }

  return (
     <>
     <Navbar/>
  <div className='wrapper1'>
    <form onSubmit={(e)=>{
         handelsubmit(e);
    }}> 
    <div>

    <label>Image</label>
        <input 
        type='text' 
        placeholder='image'  
        name='image'
        value={product.image} 
        onChange={(e)=>{handelChange(e)}}/>


    </div>
        
        <div>
        <label>Description</label>
        <input 
        type='text' 
        placeholder='Write Description' 
        name='title' 
        value={product.title}
        onChange={(e)=>{handelChange(e)}}/>
       </div>

       <div>
        <label>Price</label>
        <input 
        type='number' 
         value={product.price}
        placeholder='Enter Price' 
        name='price'  
        onChange={(e)=>{handelChange(e)}} />
       </div>

       <div>
        <label>Select Mobile</label>
         <select  onChange={(e)=>{handelChange(e)}} name='model'>
            <option>Select</option>
            <option value="samsung"> Samsung</option>
            <option value="apple">Apple</option>
            <option value="redmi">Redmi</option>

         </select>
         </div>
        <button type='submit'>Add Product</button>
    </form>
  </div>
  </>
  )
}
