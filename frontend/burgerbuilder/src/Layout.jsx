//Layout.jsx
import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Authenticate from './components/Authenticate/Authenticate.jsx'
import Signup from './components/Signup/Signup'

 function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    </>
  )
}
export default Layout