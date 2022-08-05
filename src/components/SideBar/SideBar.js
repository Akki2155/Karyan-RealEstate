import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'

import './Sidebar.css'

const SideBar = ({check}) => {


  return (
    <div>
    { check  ? 
        <div className='sidebar-list'>
        <Link   to='/' className='link'>
                <button type='submit' className='link-button'>Home</button>
        </Link>
        <Link to='/map-location' className='link'>
        <button type='submit' className='link-button'>Location Map</button>
        </Link>
        <Link to='/floorPlan' className='link'>
        <button type='submit' className='link-button' >Floor Plan</button>
        </Link>
        <Link to='/' className='link'>
        <button type='submit' className='link-button'>Brochure</button>
        </Link>
        <Link to='/contact' className='link'>
        <button type='submit' className='link-button' >Contact Us</button>
        </Link>
        </div>
    
    : 
      ' '
    }
  </div>
  )
}

export default SideBar