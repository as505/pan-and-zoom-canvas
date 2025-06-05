import canvas_image from '/Utah_teapot_simple_2.png'
import './App.css'

function App() {
  return (
    <>
      <div className='canvasFrame'>
          <img src={canvas_image} className="canvasImage" alt="Picture of the Utah Teapot"/>
      </div>
    </>
  )
}

export default App
