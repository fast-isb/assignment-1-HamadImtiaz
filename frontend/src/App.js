import React from 'react'
import{ Routes,Route } from 'react-router-dom'
import Nav from './components/Nav'
import Homepage from './components/Homepage'
import Login from './components/Login'
import Register from './components/Register'

import RoutesHome from './components/routesHome'
import AddRoutes from './components/AddRoutes'
import UpdateRoute from './components/UpdateRoute'
import RoutesInformation from './components/RoutesInformation'



const App=()=>{
  return(
    <>
      
        <Nav />
        <Routes>
        <Route   exact path="/Homepage" element={<Homepage />}/> 
        
        <Route   path="/Login" element={<Login />}/>
        <Route   path="/Register" element={<Register />}/>

        <Route   path='/RouteHome' element={<RoutesHome/>}/>
        <Route   path='AddRoutes'  element={<AddRoutes/>}/>
        <Route   path='UpdateRoutes/:id' element={<UpdateRoute/>}/>
        <Route   path='RouteInformation/:id' element={<RoutesInformation/>}/>

      
        </Routes> 
        
        
    
    </>
  )
}
export default App;
