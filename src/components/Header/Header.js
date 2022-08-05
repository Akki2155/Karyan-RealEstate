import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faClose} from '@fortawesome/free-solid-svg-icons'
import SideBar from '../SideBar/SideBar';



const Header = () => {



    const[sideBar,setsideBar]=useState(false);
    return (
        <div>
            <div className='header-container'>
                <div className='header-logo'>
                  <img src='/assests/logo.jpg' alt='karyan Logo' /> 
                </div>
                {window.innerWidth<1300? <div className='side-bar'>
                { sideBar? 
                    <div className='side-bar-container' >
                     <button onClick={()=>{ setsideBar(false)} }><FontAwesomeIcon icon={faClose} style={{'color':'white','fontSize':'2rem'}} /></button>
                    <SideBar check={sideBar}/>
                    </div>
                :
                <div className='side-bar-container'>
                <button onClick={()=>{ setsideBar(true)} }><FontAwesomeIcon icon={faBars} style={{'color':'white','fontSize':'2rem'}} /></button>
                  <SideBar check={sideBar}/>
                </div>
                }
                </div>       
                :    
                <div className='header-list'>
                   <Link to='/' className='link'>
                  <button type='submit' className='button-84'>Home</button>
                   </Link>
                   <Link to='/map-location' className='link'>
                   <button type='submit' className='button-84'>Location Map</button>
                   </Link>
                   <Link to='/floorPlan' className='link'>
                   <button type='submit' className='button-84'>Floor Map</button>
                   </Link>
                   <Link to='/' className='link'>
                   <button type='submit' className='button-84'>BROCHURE</button>
                   </Link>
                   <Link to='/contact' className='link'>
                   <button type='submit' className='button-84'>Contact Us</button>
                   </Link>
               </div>
            }
        </div>
        </div>
    )
}

export default Header