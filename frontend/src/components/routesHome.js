import React, { useState } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const RouteHome=()=>{

  // const navigate=new useNavigate();

  const [getRoutesData, setRoutesData]=useState([]);
  console.log(getRoutesData)


const displayData=async(req,res)=>{
  const response=await axios.get('http://localhost:3001/displayRoutes');
  // console.log(response.data.response);
  setRoutesData(response.data.response)

}

useEffect(()=>{
  displayData();
},[])

const deleteData=async(id)=>{
  const response=await axios.delete(`http://localhost:3001/deleteRoutes/${id}`)
  setRoutesData(response.data.response)
  displayData();
}






const mapping=()=>{

  let x=getRoutesData.map((element,id)=>{
    return(
        <tr>
            <th scope="row">{id+1}</th>
            <td>{element.Destination}</td>
            <td>{element.Origin}</td>
            <td>{element.Driver}</td>
            <td className='d-flex '>
              <Link to={`/RouteInformation/${element._id}`}><button className='btn btn-success mx-2'><i className="fas fa-eye"></i></button></Link>
              <Link to={`/UpdateRoutes/${element._id}`}><button className='btn btn-primary mx-2'>< i className="fas fa-pen"></i></button></Link>
              <button className='btn btn-danger'onClick={()=>deleteData(element._id)} ><i className="fas fa-trash"></i></button>
            </td>
        </tr>
     
    )
    
  })
  return x;
  
}





  return(
    <div className="mt-5">
      <div className='container'>
        <div className='add_btn mt-4'>
        <Link to='/AddRoutes'> <button className='btn btn-primary'>Add Routes</button></Link>
        </div>

        <table class="table">
  <thead>
    <tr className='table-dark'>
      <th scope="col">ID</th>
      <th scope="col">Destination</th>
      <th scope="col">Origin</th>
      <th scope="col">Driver</th>

      <th scope ="col">CRUD</th>
    </tr>
  </thead>
  <tbody>
    {
      mapping()
    }

   </tbody>
</table>

      </div>

    </div>
  )
}
export default RouteHome;