import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/authReducer/action'
import "./Login.css"
import { Navbar } from '../Components/Navbar'
export const Login = () => {
  const[email,setemail]= useState("")
  const[password,setpassword]= useState("")
  const dispatch = useDispatch()
  const handelchange = ()=>{
         const userdata= {email, password}
         dispatch(login(userdata))
         
  }
  return (
   <>
      <Navbar/>
      <div className='wrapper2'>
        <label>Email</label>
        <input 
        type='text'
        onChange={(e)=>{
          setemail(e.target.value)
        }} 
         placeholder='Email'
        />
         
         <label>Password</label>
        <input 
        type='text'
        onChange={(e)=>{
          setpassword(e.target.value)
        }} 
        placeholder='Password'
        />
      
      <button onClick={handelchange}>Login</button>
      </div>
   </>
  )
}
