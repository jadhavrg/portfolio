import React, { useState } from 'react'
import logo from '../../Assects/logo.ico'
import contact from '../../Assects/contact.png'
import {Link} from 'react-scroll'
import './Navbar.css'
import menu from './../../Assects/menu.png'

function Navbar() {

  const[showMenu, setShowMenu] = useState(false) ;

  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo' />
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Projects</Link>
            <Link activeClass='active' to='certificate' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Certificates</Link>
        </div>
        <button className='desktopMenuBtn' onClick={()=>{document.getElementById('contact').scrollIntoView({behavior: "smooth"});}}>
            <img src={contact} alt='contact' className='desktopMenuImg' />Contact Me
        </button>
        <img src={menu} alt='Menu' className='mobMenu'onClick={()=>setShowMenu(!showMenu)}  />
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='certificate' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Certificates</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar