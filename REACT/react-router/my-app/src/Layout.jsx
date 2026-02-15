import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

// Navigate between different “pages” in a React app without reloading the browser.

import { Outlet } from 'react-router-dom'

function Layout() {     // requires specific syntax
  return (
    <>
    <Header />
    <Outlet /> 
    <Footer />
    </>
  )
}

export default Layout

/*
Outlet uses this Layout as base and make above and bwlow components available in all the pages. So we can use this Layout as a wrapper for all the pages and we can use the Outlet component to render the page content. This way we can avoid repeating the same code in all the pages and we can also make sure that the header and footer are always visible on all the pages.
*/