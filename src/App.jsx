import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    
   <div 
   style={{backgroundColor:color , width:"100vw" ,height:"100vh" }}
   >

    <div className='btncontainer'>
      <button className='btn' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
      <button className='btn' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
      <button className='btn' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
      <button className='btn' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
      <button className='btn' style={{backgroundColor:"tomato"}} onClick={()=>setColor("tomato")}>tomato</button>
      <button className='btn' style={{backgroundColor:"gray"}} onClick={()=>setColor("gray")}>gray</button>
      <button className='btn' style={{backgroundColor:"white"}} onClick={()=>setColor('white')}>white</button>


    </div>


   </div>
      
        
   
  )
}

export default App
