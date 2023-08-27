import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Joi from 'joi'
import DropzoneDragDrop from './DropzoneDragDrop'


export default function CreateSession(props) {

  let navigate = useNavigate()
  const [isLoading,setIsLoading] =useState(false)
  const [validateError,setValidateError] = useState([])
  const [error,setError] = useState('')
  const [session,setSession] = useState({
    title:'',
    subTitle :'',
    description:'',
    date:'',
  })

  //put session's properties's values from form
  function getSessionData(e){
    let mySession = {...session}
    mySession[e.target.name] = e.target.value
    setSession(mySession) 
  }

  //submit form
  async  function  submitSessionForm(e){
      e.preventDefault()
      setIsLoading(true)

      //call validation function
      let validateResult =  validateRegisterForm()
      //if the validation function return error
      if(validateResult.error){
        setIsLoading(false)
        setValidateError(validateResult.error.details)
      }else{
        console.log(session);
          // let {data} = await  axios.post(`https://route-egypt-api.herokuapp.com/signup`,session)
          // if(data.message =="success"){
          //   setIsLoading(false)
          //   navigate('/Login')
          // }else{
          //   setError(data.message)
          //   setIsLoading(false)
          // }
      }
  }

  function validateRegisterForm(){
    let scheme = Joi.object({
      title : Joi.string().required(),
      subTitle  : Joi.string().required(),
      description : Joi.string().required(),
      date : Joi.date().required(),
    })
    return scheme.validate(session,{abortEarly:false})
  }
  return (
    <>
    <div className='sessions overflow-auto '>
      <div className='container-fluid  '>
        <div className="d-flex align-items-start justify-content-between py-3 px-2">
            <div className="">
                <Link to="/" className=" d-flex align-items-center text-decoration-none" >
                    <img src="leftArrow.svg" alt="" className='me-1'  />
                    <span className="all-sessions-color ">All Sessions</span>
                </Link>
                <h4 className="p-2 ps-3 text-white  ">New Sessions</h4>
            </div>
          <div className="d-flex align-items-center justify-content-between "> 
              <Link to="/" className="p-2 px-4 fw-bolder cancel-btn  text-white d-flex align-items-center justify-content-center text-dark text-decoration-none" >
                <span >Cancel</span>
              </Link>
              <button  id="submitButton" type="submit" form="myForm"  className="p-2 px-4 fw-bolder bg-white  text-dark d-flex align-items-center justify-content-center text-dark text-decoration-none" >
                {/* <span > {isLoading ?<i className='fas fa-spinner fa-spin'></i>: `Next`}</span>                 */}
                <span > Next</span>                
              </button>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className='mx-5'>
          <div className="form-container mx-5 p-5">
            <form onSubmit={submitSessionForm} id="myForm" className=''>
              <label className='mt-3 mb-2 sessions-body-color d-flex align-items-start' htmlFor="title">Session Title { validateError.map((error, index) => error.message.includes('title') ? <span key={index} className='error d-flex  mx-1 pt-1'> <img src="star.svg"/></span>:"")}</label>
              <input onChange={getSessionData} className='form-control'  type="text"  id='title' name='title' placeholder='Start Typing...'/>
              


              <label className='mt-4 mb-2 sessions-body-color d-flex align-items-center justify-content-between' htmlFor="subTitle">
                <div className='d-flex align-items-start'>Session Subtitle  { validateError.map((error, index) => error.message.includes('subTitle') ? <div key={index} className='error d-flex  mx-1 pt-1'> <img src="star.svg"/></div>:"")}</div> 
                <div className='note'>
                  <img src="question.svg" alt="" />
                  <div className='bg-dark text-white p-3 ps-4 note-content'>
                        Unique info about <br />
                        the session, that will be<br />
                        displayed under the title
                  </div>
                </div>
              </label>
              <input onChange={getSessionData} className='form-control' type="text"  id='subTitle'name='subTitle'  placeholder='Start Typing...' />
            

              <label className='mt-4 mb-2 sessions-body-color d-flex align-items-start' htmlFor="description"  >Description   { validateError.map((error, index) => error.message.includes('description') ? <div key={index} className='error d-flex  mx-1 pt-1'> <img src="star.svg"/></div>:"")}  </label>
              <textarea onChange={getSessionData} className='form-control' rows={2} type="text"  id='description'name='description'  placeholder='Type details'/>
            
                <DropzoneDragDrop/>

              <div className="row">
                <div className="col-6">
                    <label className='mt-4 mb-2 sessions-body-color d-flex align-items-start' htmlFor="date"  >Date   { validateError.map((error, index) => error.message.includes('date') ? <div key={index} className='error d-flex  mx-1 pt-1'> <img src="star.svg"/></div>:"")}  </label>
                     <input onChange={getSessionData} className='form-control' type="date"  id='date'name='date'  placeholder='Start Typing...' />
                </div>
                <div className="col"></div>
                <div className="col"></div>
              </div>
            
            </form> 
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
