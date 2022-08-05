import React from 'react'
import './Contact.css'
import Heading from '../../components/heading/Heading';

const Contact = () => {
  return (
    <div className='contact-container'>
        <Heading title="KARYAN CITYWALK- CONTACT DETAILS"/>
        <div className='contactDetail-container'>
            <div className='address-container'>
                <span>Site Address:</span>
                <p>Shop No.2, Sector 2, Wave City, Ghaziabad , 201002</p>
            </div>
            <div className='address-container'>
                <span>Email : </span>
                <p>infowavecitynh24@gmail.com</p>
            </div>
            <div className='address-container'>
                <span>Phone No: </span>
                <p>+91 9999 534 995</p>
            </div>
        </div>
    </div>
  )
}

export default Contact