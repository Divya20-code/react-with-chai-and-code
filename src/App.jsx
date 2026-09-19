import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className = "w-full h-screen duration-200"
      style ={{backgroundColor: color}}>
        <div className ="fixed flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bottom-30 insert-x-0 mx-auto">
          <div className = "flex flex-wrap justify-center align-items-center gap-4 bg-white rounded-lg px-2 py-2 shadow-lg shadow-black/30"> 
            <button onClick={()=>setColor("red")} className ="px-4" style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=>setColor("orange")} className ="px-4" style={{backgroundColor:"orange"}}>Orange</button>
            <button onClick={()=>setColor("pink")} className ="px-4" style={{backgroundColor:"pink"}}>Pink</button>
            <button onClick={()=>setColor("blue")} className ="px-4" style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=>setColor("green")} className ="px-4" style={{backgroundColor:"green"}}>Green</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
