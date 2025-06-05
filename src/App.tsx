import canvas_image from '/Utah_teapot_simple_2.png'
import './App.css'
import { useState } from "react";
import { useMemo } from 'react';



function App() {
  // Lets users zoom with scroll wheel
  const [zoom, setZoom] = useState({z : 100})
  const handleMouseMove = (e) => {
    // deltaY is positive or negative depending on scroll direction
    if (e.deltaY > 0){
      setZoom({z: zoom.z - 2})
    } else {
      setZoom({z: zoom.z + 2})
    }
    
    // Update zoom property
    e.currentTarget.style.setProperty('--zoom', `${zoom.z}%`);
  };

  return (
    <>
      <div className='canvasFrame' onWheel={handleMouseMove}>
          <img src={canvas_image} className="canvasImage" alt="Picture of the Utah Teapot"/>
      </div>
    </>
  )
}


export default App
