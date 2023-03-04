import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const routes = [
  //   {
  //     path: '/',
  //     label: 'Home',
  //   },
  {
    path: '#about',
    label: 'About',
  },
  {
    path: '#projects',
    label: 'Projects',
  },
  {
    path: '#contact',
    label: 'Contact',
  },
]

const NavBar = () => {
  const [isActive, setIsActive] = useState(false)
  function handleOpenOverlay() {
    setIsActive(true)
  }
  function handleCloseOverlay() {
    setIsActive(false)
  }

  return (
    <>
      <header className='header'>
        <div className='header__title'>
          <a href='#greeting'>A.</a>
        </div>
        <div
          onClick={isActive ? handleCloseOverlay : handleOpenOverlay}
          role='button'
          tabIndex='0'
          className={`header__hamburger ${isActive ? 'openOverlay' : ''}`}
        ></div>
        <nav className='header__navbar desktop'>
          {routes.map((route) => (
            <a
              key={route.path}
              href={route.path}
              // to={route.path}
              className='header__link'
              // className={({ isActive }) =>
              //   isActive ? 'header__link active' : 'header__link'
              // }
            >
              {route.label}
            </a>
          ))}
        </nav>
      </header>
      <div className={`header__overlay ${isActive ? 'openOverlay' : ''}`}>
        <nav className='header__navbar__mobile'>
          {routes.map((route) => (
            <a
              key={route.path}
              href={route.path}
              // to={route.path}
              className="header__link"
              // className={({ isActive }) =>
              //   isActive ? 'header__link active' : 'header__link'
              // }
            >
              {route.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}

export default NavBar
