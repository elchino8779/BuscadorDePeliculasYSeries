import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.scss'
import home from '/icons/home.svg'
import peliculas from '/icons/peliculas.svg'
import series from '/icons/series.svg'
import buscar from '/icons/buscar.svg'

const NavBar = () => {
  return (
    <div className='nav-bar-container'>

      <NavLink to='/' className='nav-link-navbar'>
        <img src={home} alt='Home' />
      </NavLink>

      <NavLink to='/peliculas' className='nav-link-navbar'>
        <img src={peliculas} alt='Peliculas' />
      </NavLink>

      <NavLink to='series' className='nav-link-navbar'>
        <img src={series} alt='Series' />
      </NavLink>

      <NavLink to='buscar' className='nav-link-navbar'>
        <img src={buscar} alt='Buscar' />
      </NavLink>

    </div>
  )
}

export default NavBar