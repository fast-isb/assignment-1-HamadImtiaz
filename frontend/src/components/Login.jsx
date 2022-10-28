import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCardImage
}
from 'mdb-react-ui-kit';
import '../style.css';
const  Login=()=> {
  return (
    <MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='Your Email' id='form2' type='email'/>
        </div>
        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput label='Password' id='form3' type='password'/>
        </div>
        <MDBBtn outline className='mx-2 px-5' color='black' size='lg'>
                 Login
        </MDBBtn>

        <div className='d-flex flex-row mt-3 mb-5'>
                 <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'black' }}>
                   <MDBIcon fab icon='facebook-f' size="lg"/>
                 </MDBBtn>

                 <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'black' }}>
                   <MDBIcon fab icon='twitter' size="lg"/>
                 </MDBBtn>

                 <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'black' }}>
                   <MDBIcon fab icon='google' size="lg"/>
                 </MDBBtn>
               </div>
              <div>
                <p className="mb-0">Don't have an account? <a href="/Register" class="text-black-50 fw-bold">Sign Up</a></p>
              </div>
        
        </MDBCol>
        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
          <MDBCardImage img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>
      </MDBRow>
  </MDBCardBody>
</MDBCard>

</MDBContainer>


  );
}
export default Login;