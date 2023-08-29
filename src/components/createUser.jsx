import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Joi from 'joi'
import axios from 'axios'
import DropzoneDragDropUser from './DropzoneDragDropUser'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MultiSelect } from "react-multi-select-component";


export default function CreateUser(props) {

  let navigate = useNavigate()

  const [isLoading,setIsLoading] =useState(false)
  const [error,setError] = useState('')

  //session data
  const [user,setUser] = useState({
    first_name:'',
    last_name:'',
    email:'',
    image :'',
  })

  //upload image
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const handleFileDrop = (acceptedFiles) => {
    user.image = acceptedFiles[0];
    setUploadedFiles(acceptedFiles[0]);
    };
  
  




  //put user's properties's values from form
  function getUserData(e){
    let myUser = {...user}
    myUser[e.target.name] = e.target.value
    setUser(myUser) 
  }


  
  //validation
  const [validateError,setValidateError] = useState([])
  function validateUserForm(){
    let scheme = Joi.object({
      first_name : Joi.string().required(),
      last_name : Joi.string().required(),
      email: Joi.string().email({ tlds: { allow: false } }).required(),
      image: Joi.object().unknown(true),
    })
    return scheme.validate(user,{abortEarly:false})
  }

    //submit form
    async  function  submitUserForm(e){
      e.preventDefault()
      // setIsLoading(true)
     
      //call validation function
      let validateResult =  validateUserForm()
      const token = 'eyJhbGciOiJSUzI1NiJ9.eyJpZCI6MjEyLCJ0eXBlIjoidXNlciIsInJhbiI6IkFQWEVFT0hMWEhSWk1ISlRUWFNZIiwic3RhdHVzIjoxfQ.ZgAWMwcCTYvVTARUT8wjxGCpLn5vRsDEt-zpzIPhsRN4np-sqWZ6YpCOPZsD40MWPjCfAepXdLIRW6JLiJYla8AHTogRMY-UIyqq8KvxhO8euOGVLLm6-jbhws7h4uznwQrc8mb8IywKm0Qagm2i5NdM9bRotWWW3viNXVxAOXfpx5ciRCSLlCAEisC47s5n7GM2ytT2BIeLEnSK1p9XvrF7-1Z-F8yjsKTG29wjejjZcanvY2_j53nR62glm-ZvIhP6jXPLlEaE1jttfOYC3BaJSHbdYdEXzSLzsAaB2HI1ZmtFdat7d0cKsSvCgu6Z73uzvC6oOtbhywQQfu2lOw';

      
      //if the validation function return error
      if(validateResult.error){
        setIsLoading(false)
        setValidateError(validateResult.error.details)
      }else{
        console.log(user);
        user.event_id= 8;

        axios({
          method: 'POST', 
          url: 'https://qa-testing-backend-293b1363694d.herokuapp.com/api/v3/create-users',
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: user
        })
          .then(response => {
            console.log(response.data);
            navigate('/create-session')
          })
          .catch(error => {
            console.error(error);
          });
      }
  }

  return (
    <>
      <div className='sessions overflow-auto pb-5'>
        <div className='container-fluid  '>
          <div className="d-flex align-items-start justify-content-between py-3 px-2">
              <div className="">
                  <Link to="/" className=" d-flex align-items-center text-decoration-none" >
                      <img src="leftArrow.svg" alt="" className='me-1'  />
                      <span className="all-sessions-color ">All Sessions</span>
                  </Link>
                  <h4 className="p-2 ps-3 text-white  ">New User</h4>
              </div>
          </div>
        </div>

        <div className="container ">
          <div className='row'>
            <div className="col-5 offset-3">
            <div className="form-container mx-5 p-4">
              <form onSubmit={submitUserForm} id="userForm" className='p-1'>
                <h5 className='mb-4'>Add Speaker</h5>

                <DropzoneDragDropUser onFileDrop={handleFileDrop} data={validateError}/>

                <label className='mt-3 mb-2 sessions-body-color d-flex align-items-start' htmlFor="first_name">First Name { validateError.map((error, index) => error.message.includes('first_name') ? <span key={index} className='error d-flex  mx-1 pt-1'> <img src="star.svg"/></span>:"")}</label>
                <input onChange={getUserData} className='form-control'  type="text"  id='first_name' name='first_name' placeholder='John'/>
                
                <label className='mt-3 mb-2 sessions-body-color d-flex align-items-start' htmlFor="last_name">Last Name{ validateError.map((error, index) => error.message.includes('last_name') ? <span key={index} className='error d-flex  mx-1 pt-1'> <img src="star.svg"/></span>:"")}</label>
                <input onChange={getUserData} className='form-control'  type="text"  id='last_name' name='last_name' placeholder='Doe'/>
                
                <label className='mt-3 mb-2 sessions-body-color d-flex align-items-start' htmlFor="email">Email { validateError.map((error, index) => error.message.includes('email') ? <span key={index} className='error d-flex  mx-1 pt-1'> <img src="star.svg"/></span>:"")}</label>
                <input onChange={getUserData} className='form-control'  type="text"  id='email' name='email' placeholder='john@gmail.com'/>
                
                <div className="d-flex align-items-center justify-content-between mt-4"> 
                  <Link to="/create-session" className="p-2 px-5 fw-bolder cancel-btn  text-white d-flex align-items-center justify-content-center text-dark text-decoration-none" >
                    <span className='mx-3 cancel-user' >Cancel</span>
                  </Link>
                  <button  id="submitButton" type="submit" form="userForm"  className="p-2 px-5 fw-bolder bg-white  text-dark d-flex align-items-center justify-content-center text-dark text-decoration-none" >
                    <span className='mx-3'> Add</span>                
                  </button>
              </div>

              </form> 
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
 