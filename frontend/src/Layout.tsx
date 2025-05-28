import React from 'react'
import { Button } from './components/ui/button'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
