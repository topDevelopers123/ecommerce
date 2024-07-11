import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/footer'
import Header2 from '../header/Header2'

function Layout() {
  return (
    <div>
      <Header2/>
        {/* <Header /> */}
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout