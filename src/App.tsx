import canvas_image from '/Utah_teapot_simple_2.png'
import './App.css'
import { useState } from "react";
import { type WheelEvent } from 'react';

const MINSIZEPERCENT = 5
const MAXSIZEPERCENT = 500

function App() {
  // Handle letting go, setting click state back to 0
  const HandleMouseUp = () => {
    console.log("RELEASE");
    setClickState({s : 0});
  };


  const handleMouseMove = (e : WheelEvent<HTMLDivElement>) => {
    if (clickState.s == 1){
      console.log(e.clientX/window.innerWidth*100);
      e.currentTarget.style.setProperty('--positionX', `${e.clientX/window.innerWidth*100}%`);
      e.currentTarget.style.setProperty('--positionY', `${e.clientY/window.innerHeight*100}%`);
    }
  };


  // Handle click, adding eventlistener to mouse movement
  const handleMouseClick = () => {
    console.log("org", clickState.s);
    setClickState({s : 1})
    console.log("new", clickState.s);
  };
  // Lets users zoom with scroll wheel
  const [zoom, setZoom] = useState({z : 100})

  // User to track if a user is clicking and holding mouse
  const [clickState, setClickState] = useState({s : 0})

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
      <div className='canvasFrame' onWheel={handleScroll} onMouseDown={handleMouseClick} onMouseMove={handleMouseMove} onMouseUp={HandleMouseUp}>
          <img src={canvas_image} className="canvasImage" alt="Picture of the Utah Teapot" draggable="false"/>
      </div>
      <></>
    </>
  )
}


export default App
