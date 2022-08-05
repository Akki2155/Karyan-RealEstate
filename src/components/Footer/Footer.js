import React from 'react'
import Heading from '../heading/Heading'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <Heading title="This site is for information purpose only and should not be treated as the official information." fontSize="2rem" color="white" fontWeight="100"/>
    </div>
  )
}

export default Footer