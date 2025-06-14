import canvas_image from '/Utah_teapot_simple_2.png'
import './App.css'
import { useState } from "react";
import { type WheelEvent } from 'react';


// Default values for minimum and maximum image size
const MINSIZEPERCENT = 5
const MAXSIZEPERCENT = 500

function App() {
  // Handle image uploads
  const handleImageUpload = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files && evt.target.files[0]) {
        console.log("event type: ", typeof(evt));
        changeImage(URL.createObjectURL(evt.target.files[0]));
    }
  }

  const [image, changeImage] = useState(canvas_image);

  // Handle letting go, setting click state back to 0
  const HandleMouseUp = () => {
    setClickState({s : 0});
  };

  const handleMouseMove = (e : WheelEvent<HTMLDivElement>) => {
    if (clickState.s == 1){
      const changeX = e.clientX - lastPos.lastX;
      const changeY = e.clientY - lastPos.lastY;

      // Record current mouse position for next frame
      setLastPos({lastX : e.clientX, lastY : e.clientY});

      // Get current image possiton
      const imageXs = window.getComputedStyle(e.currentTarget).getPropertyValue("--positionX");
      const imageYs = window.getComputedStyle(e.currentTarget).getPropertyValue("--positionY");
      // Convert string to int
      const imageX = parseInt(imageXs.replace("px", ""));
      const imageY = parseInt(imageYs.replace("px", ""));

      // Add mouse movement to image possition
      const newX = imageX + changeX
      const newY = imageY + changeY

      // Uppdate image possition with new values
      e.currentTarget.style.setProperty('--positionX', `${newX}px`);
      e.currentTarget.style.setProperty('--positionY', `${newY}px`);
    }
  };


  const handleMouseClick = (e : WheelEvent<HTMLDivElement>) => {
    // Change mouse state to clicked
    setClickState({s : 1});
    // Remember mouse possition for later
    setLastPos({lastX : e.clientX, lastY : e.clientY});
  };

  // Lets users zoom with scroll wheel
  const [zoom, setZoom] = useState({z : 100});

  // User to track if a user is clicking and holding mouse
  const [clickState, setClickState] = useState({s : 0});
  // Track how much mouse has moved since last frame
  const [lastPos, setLastPos] = useState({lastX : 0, lastY : 0});

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
          <img src={image} className="canvasImage" alt="Picture of the Utah Teapot" draggable="false"/>
      </div>
      <input type="file" accept='.png' onChange={handleImageUpload} className='imageUploadButton'/>
    </>
  )
}


export default App
