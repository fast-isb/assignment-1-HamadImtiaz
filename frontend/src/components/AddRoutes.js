import React from 'react'
import { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';

import logo from '../components/images/addCustomer.png'

const AddRoutes=()=>{
    const navigate=useNavigate();
  const [routes, setRoutes]=useState({
    Destination:"", Origin:"", Driver:""

  })
  let name, value;
  const setData=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setRoutes({...routes,[name]:value});
  }

  const postData= (e)=>{


    e.preventDefault();

    const obj={Destination:routes.Destination,
        Origin:routes.Origin,
        Departure:routes.Departure,
        Driver:routes.Driver
    }
    console.log(obj)
    axios.post('http://localhost:3001/addRoutes',obj)
    .then(res=>{
      window.alert(" Route Added Successfully")
      navigate('/RouteHome')
  
    }).catch(function (error) {
      if (error.response) {
        window.alert(error.response.data.error);
      }
    });
}
  return(
    <MDBContainer fluid>

    <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
      <MDBCardBody>
        <MDBRow>
          <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

            <h2 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Routes</h2>

            <div className="d-flex flex-row align-items-center mb-4 ">
              <MDBIcon fas icon="location-dot me-3" size='lg'/>
              <MDBInput label='Destination Name' name='Destination' id='Destination' type='Destination'className='w-100' 
              value={routes.Destination}
              onChange={setData}
              />
              
            </div>
            <div className="d-flex flex-row align-items-center mb-4 ">
              <MDBIcon fas icon="location-dot me-3" size='lg'/>
              <MDBInput label='Origin Name' name='Origin' id='Origin' type='Origin'className='w-100' 
              value={routes.Origin}
              onChange={setData}
              />
              
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput label='Driver Name' name='Driver' id='Driver' type='Driver'
              value={routes.Driver}
              onChange={setData}
              />
            </div>

            {/* <div className='mb-4'>
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
            </div> */}

            <MDBBtn outline className='mx-2 px-5' color='black' size='lg' onClick={postData}>
               Add
            </MDBBtn>

            

          </MDBCol>

          <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
            <MDBCardImage src={logo} alt="logo" fluid/>
          </MDBCol>

          {/* <img src={logo} alt="logo"></img> */}

        </MDBRow> 
      </MDBCardBody>
    </MDBCard>

  </MDBContainer>
);
}
export default AddRoutes;