import React from 'react'
import './heroBanner.css'


const HeroBanner = () => {
 
  var images=['/assests/her0-2.jpg','/assests/her0-3.jpg','/assests/hero-1.jpg'];

  var t=setInterval(next,5000);

  var num=0;

  function next(){
    var slider= document.getElementById("slider");
    num = num+1;
    if(num>=images.length)
    {
      num=0;
    }
    console.log(num);
    slider.src=images[num];
  }

  return (
    <div className='hero-container'>
      <img id="slider" src='/assests/hero-1.jpg'/>
    </div>
  )
}

export default HeroBanner