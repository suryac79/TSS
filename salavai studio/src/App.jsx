

import { Route, Routes } from "react-router"
import Navbar from "./Navbar"
import Booking from "./pages/Booking"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"
import Services from "./pages/Services"

function App() {


  return (
  //  <div//// <Home/>// </div>
  <>
   <Navbar/>
  <Routes>
    
    <Route path="/" element={<Home/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/pricing" element={<Pricing/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/booking" element={<Booking/>}/>
 
  </Routes>   
  </> 
  );
}

export default App;
