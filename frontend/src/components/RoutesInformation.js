import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import logo from '../components/images/Person.jpg'
import{Link, useNavigate, useParams} from 'react-router-dom'
import { useEffect,useState } from 'react';
import axios from 'axios';


const RoutesInformation=()=>{
    const navigate=new useNavigate();
    const [getRoutesData, setRoutesData]=useState([]);
    console.log(getRoutesData)

    const {id}=useParams("");
    console.log(id)
    const displayData=async(req,res)=>{
        const response=await axios.get(`http://localhost:3001/getRoutes/${id}`);
        // console.log(response.data.response);
        setRoutesData(response.data)
        
      }

    useEffect(()=>{
        displayData();
      },[])
      const deleteData=async(id)=>{
        const response=await axios.delete(`http://localhost:3001/deleteRoutes/${id}`)
        setRoutesData(response.data.response)
        displayData();
        
      }
      
    return(
        <div className='container mt-3'>
            <h1 style={{fontWeight:400}}>Welcome to HAZ Bus Service</h1>
            <Card sx={{minwidth:275}}>
                <CardContent>
                    <div className='add_btn'>
                    <Link to ='/RouteHome'><button className='btn btn-dark mx-2'><i className="fas fa-home"></i></button></Link>
                    <Link to={`/UpdateRoutes/${getRoutesData._id}`}><button className='btn btn-primary mx-2'>< i className="fas fa-pen"></i></button></Link>
                    <button className='btn btn-danger' onClick={()=>{deleteData(getRoutesData._id) 
                        navigate('/RouteHome')}}><i className="fas fa-trash"></i></button>
                    
                    </div>
                    <div className='row'>
                    <div className='left_view col-lg-6 col-mg-6 col-12 mt-5'>
                        <h3><i class="fa-solid fa-location-dot"></i>    Destination: <span style ={{fontWeight:400,fontSize:24}}>{getRoutesData.Destination}</span></h3>
                        <h3><i class="fas fa-location-dot"></i>  Origin: <span style ={{fontWeight:400,fontSize:24}}>{getRoutesData.Origin}</span></h3>
                        <h3><i class="fa-solid fa-circle-user"></i>    Driver Name: <span style ={{fontWeight:400,fontSize:24}}>{getRoutesData.Driver}</span></h3>
                    </div>
                    <div className='right_view col-lg-6 col-mg-6 col-12' >
                    <img src={logo} style ={{height:350,width:400}} alt="logo"/>

                    </div>
                    </div>
                </CardContent>

            </Card>

        </div>
    )
}
export default RoutesInformation;