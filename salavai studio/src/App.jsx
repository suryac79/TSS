//import { useState } from 'react' these are previous vite imports
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'
//import Navbar from 'Navbar.jsx'

import Navbar from "./Navbar"
import Home from "./pages/Home"

function App() {
  //const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar/>
    <Home/>
    {/* <h1>The Salavai Studio</h1> */}
    {/* <p>Laundry made simple.</p> */}
   </div>
      
  )
}

export default App
