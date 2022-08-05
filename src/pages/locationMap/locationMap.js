import React from 'react'
import Heading from '../../components/heading/Heading'
import './location.css'

const LocationMap = () => {
  return (
    <div className='map-container'>
      <Heading title="KARYAN CITYWALK WAVE CITY- LOCATION MAP" font_Size="1.9rem"/>
      <div className='map-image'>
         <img src='/assests/map.jpg'/>
      </div>
    </div>
  )
}

export default LocationMap