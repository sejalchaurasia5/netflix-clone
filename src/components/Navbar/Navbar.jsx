import React from 'react'
import './Navbar.css'
import logo from '../../assets/cards/logo.png'
import search_icon from '../../assets/cards/search_icon.svg'
import bell_icon from '../../assets/cards/bell_icon.svg'
import profile_img from '../../assets/cards/profile_img.png'
import caret_icon from '../../assets/cards/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>New & Popular</li>
            <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons' />
        <div className="navbar-profile">
           <img src={profile_img} alt="" className='profile' />
           <img src={caret_icon} alt="" />
           <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
