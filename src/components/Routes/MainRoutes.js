import React from 'react'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/home'
import { PublicRoute } from './PublicRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import NotFound from '../NotFound'
import { useAuthContext } from '../../Context/index.context'

function MainRoutes() {
 
const {authorizeToken} = useAuthContext()
  return (
    <Routes>
          <Route element={<Layout />} >
             <Route path='/' element={<Home />} />
             {
                PublicRoute.map((item, index) => (
                    <Route key={index} path={item.path}  element={item.element} />
                ))
             }

             {
               authorizeToken &&  PrivateRoutes.map((item, index ) =>(
                    <Route key={index} path={item.path} element={item.element} />
                ))
             }
        </Route>
          <Route path='*' element={<NotFound />} />
       
      </Routes>
  )
}

export default MainRoutes