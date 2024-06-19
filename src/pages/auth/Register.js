import React from 'react'
import Form1 from '../../Components/Shared/Form/Form'

const Register = () => {
  return (
    <>
    <div className='row g-0'>
      <div className='col-md-8 form-banner'>
        <img src="./assets/images/banner1.jpg" alt="registerImage"/>
      </div>
      <div className='col-md-4 form-container'>
        <Form1 formTitle={'Register'} submitBtn={"Register"} formType={'register'}/>
      </div>
    </div>
        
    </>
  )
}

export default Register
