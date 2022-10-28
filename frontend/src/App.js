import React from 'react'
import{ Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Login from './components/Login'
import Register from './components/Register'

const App=()=>{
  return(
    <>
      
        <Navbar />
        <Routes>
        
        <Route  exact path="/Home" element={<Home />}/>
        <Route   path="/About" element={<About />}/>
        <Route   path="/ContactUs" element={<ContactUs />}/>
        <Route   path="/Login" element={<Login />}/>
        <Route   path="/Register" element={<Register />}/>
        </Routes> 
        
        
        
        
             
    </>
  )
}
export default App;