import canvas_image from '/Utah_teapot_simple_2.png'
import './App.css'
import { useState } from "react";
import { type WheelEvent } from 'react'; 
import { type MouseEvent } from 'react';
import { useCallback } from 'react';

const MINSIZEPERCENT = 5
const MAXSIZEPERCENT = 500

function App() {
  const hMM = function handleMouseMove(evt: MouseEvent){
    console.log(evt.clientX);
  }

  /* 
  // Handle letting go, removing mouse movement listener
  const HandleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    console.log("RELEASE");
  }
  */

  // Handle click, adding eventlistener to mouse movement
  const handleMouseClick = useCallback((evt: MouseEvent) => {
    console.log(evt.pageX);
    evt.currentTarget.addEventListener("mousemove", hMM);
  }, []);
  // Lets users zoom with scroll wheel
  const [zoom, setZoom] = useState({z : 100})
  const handleScroll = (e : WheelEvent<HTMLDivElement>) => {
    // deltaY is positive or negative depending on scroll direction
    // Min / Max keeps image size within set boundary
    if (e.deltaY > 0){
      setZoom({z: Math.max(zoom.z - 2, MINSIZEPERCENT)})
    } else {
      setZoom({z: Math.min(zoom.z + 2, MAXSIZEPERCENT)})
    }
    
    // Update zoom property
    e.currentTarget.style.setProperty('--zoom', `${zoom.z}%`);
  };

  return (
    <>
      <div className='canvasFrame' onWheel={handleScroll} onMouseDown={handleMouseClick}>
          <img src={canvas_image} className="canvasImage" alt="Picture of the Utah Teapot" draggable="false"/>
      </div>
      <></>
    </>
  )
}


export default App
