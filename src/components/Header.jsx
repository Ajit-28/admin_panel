import React from 'react'
import './css/header.css'
import Logo from './Logo'
import SearchBar from './SearchBar'
import Nav from './Nav'

function Header() {
  return (
    <header id='header' className='header fixed-top d-fex align-item-Center'>
         <Logo />
         <SearchBar />
         <Nav />
    </header>
  )
}

export default Header
