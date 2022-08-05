import React from 'react';
import Heading from '../../components/heading/Heading.js'
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
           <div className='home-banner'>
            <h1>KARYAN CITYWALK, WAVE CITY</h1>
            <p>RETAILS SHOP | FOOD COURT | FINE DINNING | BANQUET HALLS | RESTAURANTS</p>
        </div>
        <Heading title="KARYAN CITYWALK IN WAVE CITY SECTOR 2 GHAZIABAD" fontSize="2rem"></Heading>
        <div className='home-content'>
        <p>
        Karyan Citywalk is the most recent commercial project in Sector 2, Wave City, Ghaziabad that extends over 15800 sq. mtr. along 60 metres wide and 1 km long high street. Developed 3 side open plot with hi-tech city concept, 
        after prolonged research and study, the most trusted and reputed builder group, Karyan Infratech LLP & Saviour has launched this project in their signature project, Wave City to enhance the urban lifestyle of modern individuals to international standards. 
        This is a futuristic project that inherits all the attributes of a modern commercial project.
        </p>
        <p>
        Karyan Citywalk in Wave City Ghaziabad is a complete commercial solution featuring all sorts of commercial properties ranging from retail spaces, anchor shops, 
        fine dining and commercial spaces to redefine the paragon of business and corporate environment. 
        Enjoying a marvelous location advantage, this eco-friendly commercial project is a much sought after development for both rolling and start-up businesses.
        Karyan Citywalk has Sixe floors that include 360 shops, 2 anchor stores, 4 multipurpose banquet halls spread across 2322 sq mtr, 3 restaurants with open terraces spread across 836 sq mtr. area.
        </p>
        </div>
        <div className='home-features'>
          <Heading title="KARYAN CITYWALK PROJECT HIGHLIGHTS" fontSize="2rem"></Heading>
            <div className='home-feature-container'>
                <div className='home-feature-holder'>
                  <img src='/assests/feature1.jpg'/>
                </div>
                <div className='home-feature-holder'>
                  <img src='/assests/feature2.jpg'/>
                </div>
                <div className='home-feature-holder'>
                  <img src='/assests/feature3.jpg'/>
                </div>
                <div className='home-feature-holder'>
                  <img src='/assests/feature4.jpg'/>
                </div>
                <div className='home-feature-holder'>
                  <img src='/assests/feature5.jpg'/>
                </div>
                <div className='home-feature-holder'>
                  <img src='/assests/feature6.jpg'/>
                </div>
                <div className='home-feature-holder'>
                  <img src='/assests/feature7.jpg'/>
                </div>
                <div className='home-feature-holder'>
                  <img src='/assests/feature8.jpg'/>
                </div>
                <div className='home-feature-holder'>
                  <img src='/assests/feature9.jpg'/>
                </div>
                <div className='home-feature-holder'>
                  <img src='/assests/feature10.jpg'/>
                </div>
                <div className='home-feature-holder'>
                  <img src='/assests/feature11.jpg'/>
                </div>
                <div className='home-feature-holder'>
                  <img src='/assests/feature12.jpg'/>
                </div>
            </div>
        </div>
</div>
  )
}

export default Home