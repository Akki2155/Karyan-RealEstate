import React from 'react'
import Heading from '../../components/heading/Heading'
import './floorPlan.css'

const FloorPlan = () => {
  return (
    <div className='floor-container'> 
         <Heading title="KARYAN CITYWALK GHAZIABAD -FLOOR PLAN" />
         <div className='floor-images'>
            <button>
            <div className='image-container'>
                <img src='/assests/lgf.jpg'/>
            </div>
            </button>
            <div className='image-container'>
                <img src='/assests/ugf.jpg'/>
            </div>
            <div className='image-container'>
                <img src='/assests/ff.jpg'/>
            </div>
         </div>
            <div className='image-container-1'>
            <div className='image-container-1-1'>
                <img src='/assests/sf.jpg'/>
            </div>
            <div className='image-container-1-2'>
                <img src='/assests/ff-4.jpg'/>
            </div>
            </div>
</div>
  )
}

export default FloorPlan