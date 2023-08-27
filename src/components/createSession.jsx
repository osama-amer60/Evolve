import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Joi from 'joi'
import DropzoneDragDrop from './DropzoneDragDrop'

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import { MultiSelect } from "react-multi-select-component";


  const speakers = [
    { first_name :"Genny" , last_name :"Wilson" , img:"person1.svg", position:"CEO of World International Energy Moderation Organization  ", email:"Genny@gmail.com" , label: "Genny Wilson", value: "Genny Wilson" },
    { first_name :"Robert" , last_name :"Robert" , img:"person2.svg", position:"Executive at Green world peace ", email:"Robert@gmail.com" , label: "Robert Robert", value: "Robert Robert" },
    {first_name :"Annette" , last_name :"Black" , img:"person3.svg", position:"News anchor at MsNBC ", email:"Annette@gmail.com" ,  label: "Annette Black", value: "Annette Black" },
  ];
  const stadium = [
    { title :"Lusail Stadium" , capacity :"3.000" , img:"stadium1.png", label: "Lusail Stadium", value: "Lusail Stadium" },
    { title :"Ataturk Olympic Stadium" , capacity :"3.000" , img:"stadium1.png", label: "Ataturk Olympic Stadium", value: "Ataturk Olympic Stadium" },
 ];

export default function CreateSession(props) {
  const [speakerSelected, setSpeakerSelected] = useState([]);
  const [moderatorSelected, setModeratorSelected] = useState([]);
  const [venueSelected, setVenueSelected] = useState([]);

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

  function removeSpeaker(id){
    console.log(id);
    speakerSelected.splice(id,1)
    console.log(speakerSelected);
    let mySpeakers = {...speakerSelected}
    // setUser(mySpeakers) 
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
    <div className='sessions overflow-auto pb-5'>
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
            

                <DropzoneDragDrop/>

              <div className="row">
                <div className="col-6">
                    <label className='mt-4 mb-2 sessions-body-color d-flex align-items-start' htmlFor="date"  >Date   { validateError.map((error, index) => error.message.includes('date') ? <div key={index} className='error d-flex  mx-1 pt-1'> <img src="star.svg"/></div>:"")}  </label>
                     <input onChange={getSessionData} className='form-control' type="date"  id='date'name='date'  placeholder='Start Typing...' />
                </div>
                <div className="col-3">
                    <label className='mt-4 mb-2 sessions-body-color d-flex align-items-start' htmlFor="date"  >From   { validateError.map((error, index) => error.message.includes('date') ? <div key={index} className='error d-flex  mx-1 pt-1'> <img src="star.svg"/></div>:"")}  </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={['MobileTimePicker', 'MobileTimePicker', 'MobileTimePicker']}
                    >
                      <DemoItem >
                        <TimePicker views={['hours', 'minutes']} />
                      </DemoItem>
          
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
                <div className="col-3">
                    <label className='mt-4 mb-2 sessions-body-color d-flex align-items-start' htmlFor="date"  >Till   { validateError.map((error, index) => error.message.includes('date') ? <div key={index} className='error d-flex  mx-1 pt-1'> <img src="star.svg"/></div>:"")}  </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={['MobileTimePicker', 'MobileTimePicker', 'MobileTimePicker']}
                    >
                      <DemoItem >
                        <TimePicker views={['hours', 'minutes']}  />
                      </DemoItem>
          
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>
            

            
              <label className='mt-4 mb-2 sessions-body-color d-flex align-items-start' htmlFor="description"  >Description   { validateError.map((error, index) => error.message.includes('description') ? <div key={index} className='error d-flex  mx-1 pt-1'> <img src="star.svg"/></div>:"")}  </label>
              <textarea onChange={getSessionData} className='form-control' rows={3} type="text"  id='description'name='description'  placeholder='Type details'/>
            

              <hr class="my-5"/>

              <label className='mt-3 mb-2 sessions-body-color d-flex align-items-start' htmlFor="speaker">Speaker{ validateError.map((error, index) => error.message.includes('speaker') ? <span key={index} className='error d-flex  mx-1 pt-1'> <img src="star.svg"/></span>:"")}</label>
              <div>
                  <MultiSelect
                    options={speakers}
                    value={speakerSelected}
                    onChange={setSpeakerSelected}
                    labelledBy="Select"
                    Select="Select-options"
                    isCreatable={true}
                    closeOnChangedValue	={true}

                    />
                    {/* <pre>{JSON.stringify(speakerSelected.length)}</pre> */}
                    {speakerSelected.length > 0?
                        <div className=''>              
                          {speakerSelected.map((speaker,i)=>
                                <div className='speaker  my-2 ' key={i}>              
                                  <div className='row'>              
                                    <div   className="col col-md-11">
                                      {/* {JSON.stringify(speaker)} */}
                                      <div className='d-flex align-items-center speaker-info py-3 px-3'>
                                          <img src={speaker.img} alt="" width={36} height={36}/>
                                          <span className='mx-2'> {speaker.first_name}  {speaker.last_name}</span>
                                          <span class="position"> {speaker.position}</span>
                                      </div>
                                    </div>
                                    <div className="col col-1 ">
                                      <div className='d-flex align-items-center justify-content-center w-100 h-100'>
                                          <img src="delete.svg" alt=""  onClick={()=>removeSpeaker(i)}  width={28} height={28}/>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                          )}
                        </div>:""}
                </div>

    

              <label className='mt-4 mb-2 sessions-body-color d-flex align-items-start' htmlFor="speaker"> Moderator { validateError.map((error, index) => error.message.includes('speaker') ? <span key={index} className='error d-flex  mx-1 pt-1'> <img src="star.svg"/></span>:"")}</label>
              <div>
                  <MultiSelect
                    options={speakers}
                    value={moderatorSelected}
                    onChange={setModeratorSelected}
                    labelledBy="Select"
                    Select="Select-options"
                    isCreatable={true}
                    closeOnChangedValue	={true}

                    />
                    {/* <pre>{JSON.stringify(moderatorSelected.length)}</pre> */}
                    {moderatorSelected.length > 0?
                        <div className=''>              
                          {moderatorSelected.map((speaker,i)=>
                                <div className='speaker  my-2 ' key={i}>              
                                  <div className='row'>              
                                    <div   className="col col-md-11">
                                      {/* {JSON.stringify(speaker)} */}
                                      <div className='d-flex align-items-center speaker-info py-3 px-3'>
                                          <img src={speaker.img} alt="" width={36} height={36}/>
                                          <span className='mx-2'> {speaker.first_name}  {speaker.last_name}</span>
                                          <span class="position"> {speaker.position}</span>
                                      </div>
                                    </div>
                                    <div className="col col-1 ">
                                      <div className='d-flex align-items-center justify-content-center w-100 h-100'>
                                          <img src="delete.svg" alt=""  onClick={()=>removeSpeaker(i)}  width={28} height={28}/>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                          )}
                        </div>:""}
                </div>

    
              <hr class="my-5"/>

              <label className='mt-4 mb-2 sessions-body-color d-flex align-items-start' htmlFor="speaker"> Venue { validateError.map((error, index) => error.message.includes('speaker') ? <span key={index} className='error d-flex  mx-1 pt-1'> <img src="star.svg"/></span>:"")}</label>
              <div>
                  <MultiSelect
                    options={stadium}
                    value={venueSelected}
                    onChange={setVenueSelected}
                    labelledBy="Select"
                    Select="Select-options"
                    isCreatable={true}
                    closeOnChangedValue	={true}

                    />
                    {venueSelected.length > 0?
                        <div className=''>              
                          {venueSelected.map((speaker,i)=>
                                <div className='speaker  my-2 ' key={i}>              
                                  <div className='row'>              
                                    <div   className="col col-md-12">
                                      <div className='d-flex align-items-center speaker-info py-3 px-3'>
                                          <img src={speaker.img} alt="" width={180} height={100}/>
                                         <div className='mx-3'>
                                            <h4 > <strong>{speaker.title} </strong></h4>
                                             <p class="position">Venue Capacity:  {speaker.capacity}</p>
                                         </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                          )}
                        </div>:""}
                </div>

            </form> 
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
