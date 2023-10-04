import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Login'
import {HomePage} from "./HomePage"
import { Admin } from './Admin'

export const MainRoutes = () => {
  return (
  <>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='*' element={<h1>Error 420 Page Not Found</h1>}/>
     </Routes>
  </>
  )
}
