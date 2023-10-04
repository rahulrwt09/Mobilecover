import React, { useEffect, useState } from 'react'
import "./productlist.css"
import { useParams, useSearchParams } from 'react-router-dom';
export const Sidebar = () => {
  const[searchparam, setsearchparams]= useSearchParams()
  const initialstate= searchparam.getAll('category')
  const initialorder= searchparam.get("order")
   const[category, setcategory]= useState(initialstate || []);
   const[order, setorder]= useState(initialorder || "")
 

  const handelChange= (e)=>{
    const newcategory= [...category]
    let value= e.target.value;
    if(newcategory.includes(value)){
      newcategory.splice(newcategory.indexOf(value),1)
    }
    else{
      newcategory.push(value);
    }
    setcategory(newcategory);
    console.log(newcategory)
   
  } 

  const handelsort = (e)=>{
    setorder(e.target.value)
 }
   useEffect(()=>{
     let params= {
      category:category
      
     };
     order && (params.order=order);
     setsearchparams(params)
   }, [category, order])
    
  
  return (
    <div className='sidebar'> 
  
     <h3>Filter By</h3>
      <div>
      
      <input type="checkbox" value= "samsung"onChange={handelChange} checked={category.includes("samsung")} />
       <label>Samsung</label>
      </div>

      <div>
     
      <input type="checkbox" value="apple" onChange={handelChange} checked={category.includes("apple")} />
       <label>Apple</label>
      </div>

      <div>
   
      <input type="checkbox" value="redmi"onChange={handelChange} checked={category.includes("redmi")}/>
       <label>Redmi</label>
      </div>
   
     <br/>
     <div>
      <h3>Sort by</h3>
      <input type='radio' name='order' onChange={handelsort} value={"asc"} checked={order=="asc"}/>
      <label>Asc</label>
      <input type='radio' name='order' onChange={handelsort} value={"desc"} checked={order=="desc"}/>
      <label>decs</label>
     </div>
       
     
    </div>
  )
}
