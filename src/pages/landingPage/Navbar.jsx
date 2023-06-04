import React from 'react'
import '../../styles/Navbar.scss'
import logo from '../../assets/Vector-i.svg'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>  
      <div className="landingNavbar">
        <div className="logo left">
     <img src={logo} alt="" />
 <h2>RA_SYS</h2>
        </div>
<div className="right">
  <Link className='link_nav' to="#">Pricing</Link>
  <Link className='link_nav' to="#">About</Link>
  <Link  className='link_nav'to="/sign">Join Us</Link>
</div>
      </div>
    </>
  )
}

export default Navbar