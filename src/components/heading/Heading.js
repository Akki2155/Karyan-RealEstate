import React, { useEffect, useState } from 'react'
import './heading.css'

function getWindowSize(){
  const {innerWidth, innerHeight}= window;

  return{ innerWidth, innerHeight };
}


const Heading = ({title, fontSize, color, fontWeight}) => {


  const [windowSize, setwindowSize] = useState(getWindowSize())
  useEffect(() => {
   
      function handleWindowSize() {
          setwindowSize(getWindowSize());
      }

      window.addEventListener('resize',handleWindowSize);

      return () =>{
          window.removeEventListener('resize', handleWindowSize);
      };
      
  }, [])

  const Windowsize=windowSize.innerWidth;
  
  if(Windowsize<600){
    fontSize =parseInt(fontSize)-1;
     fontSize=fontSize.toString();
     fontSize=fontSize+'rem';
  }



  return (
    <div>
        <h3 className='title' 
             style={{
              'fontSize':fontSize,
              'color':color,
              'fontWeight':fontWeight
              }}
        >{title}</h3>
    </div>
  )
}

export default Heading