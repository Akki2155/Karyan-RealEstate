import React from 'react'
import Heading from '../heading/Heading'
import './bookVisit.css'

const BookVisit = () => {
    return (
        <>
        <div className='main-container'>
        <Heading title="BOOK SITE VISIT "/>
           <div className='container'>
            <div className='image'>
                <img src='/assests/her0-3.jpg'/>
            </div>
            <div className='form-container'>
                <div className='form-container-1'>
                    <div className='form-container-1-1'>
                       <p>Full Name</p>
                       <input type="text" name='Full Name'/>
                    </div>
                    <div className='form-container-1-2'>
                    <p>Email ID </p>
                    <input type="text" name='Full Name'/>
                    </div>
                </div>
                <div className='form-container-2'>
                     <p>Phone No </p>
                    <input type="text" name='Full Name'/>
                </div>
                <div className='form-container-3'>
                    <p>Query </p>
                <textarea id="w3review" name="" placeholder="Interested in Site Visit ..." rows="4" cols="50"></textarea>
                </div>
                <button type='submit ' className='submit-button'>SUBMIT</button>
            </div>
            </div>
        </div>
    </>
    )
}

export default BookVisit