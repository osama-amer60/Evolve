import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Joi from 'joi'
import axios from 'axios'
import DropzoneDragDrop from './DropzoneDragDrop'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MultiSelect } from "react-multi-select-component";


export default function CreateSession(props) {  
  let navigate = useNavigate()
  const speakers = [
    { id:"1", first_name :"Genny" , last_name :"Wilson" , img:"person1.svg", position:"CEO of World International Energy Moderation Organization  ", email:"Genny@gmail.com" , label: "Genny Wilson", value: "Genny Wilson" },
    { id:"2", first_name :"Robert" , last_name :"Robert" , img:"person2.svg", position:"Executive at Green world peace ", email:"Robert@gmail.com" , label: "Robert Robert", value: "Robert Robert" },
    {id:"3", first_name :"Annette" , last_name :"Black" , img:"person3.svg", position:"News anchor at MsNBC ", email:"Annette@gmail.com" ,  label: "Annette Black", value: "Annette Black" },
  ];
  const stadium = [
    {id:"8", title :"Lusail Stadium" , capacity :"3.000" , img:"stadium1.png", label: "Lusail Stadium", value: "Lusail Stadium" },
    { id:"2", title :"Ataturk Olympic Stadium" , capacity :"3.000" , img:"stadium1.png", label: "Ataturk Olympic Stadium", value: "Ataturk Olympic Stadium" },
  ];

  //session data
  const [session,setSession] = useState({
    speaker_ids:'',
    moderator_ids:'',
    title:'',
    subTitle :'',
    description:'',
    cover_image:"",
    date:'',
    from:'',
    till:'',
    event_id:'',
  })


  //selectors
  const [speakerSelected, setSpeakerSelected] = useState([]);
  function getSpeakerChange(e){
    session.speaker_ids = e.map(x => { return x.id });
    setSpeakerSelected(e)
  };

  const [moderatorSelected, setModeratorSelected] = useState([]);
  function getModeratorSelected(e){
    session.moderator_ids =  e.map(x => { return x.id });
    setModeratorSelected(e)
  };

  const [venueSelected, setVenueSelected] = useState([]);
  function getVenueSelected(e){
    session.event_id =  e.map(x => { return x.id });
    setVenueSelected(e)
  };



  //upload image
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const handleFileDrop = (acceptedFiles) => {
      const reader = new FileReader();
      reader.readAsDataURL(acceptedFiles[0]);

      reader.addEventListener("load", () => {
        if (typeof reader.result === "string") {
          // console.log(reader.result);
          session.cover_image =  reader.result;
          setUploadedFiles(acceptedFiles[0]);
        }
      });
    
  };
  
  

  // time
  const [selectedFromTime, setSelectedFromTime] = useState(null);   
  const handleFromTimeChange = (newTime) => {
    session.from = newTime;
    setSelectedFromTime(newTime);
  };
  
  const [selectedTillTime, setSelectedTillTime] = useState(null);   
  const handleTillTimeChange = (newTime) => {
    session.till = newTime;
    setSelectedTillTime(newTime);
  };
  



  //put session's properties's values from form
  function getSessionData(e){
    let mySession = {...session}
    mySession[e.target.name] = e.target.value
    setSession(mySession) 
  }

  function removeSpeaker(id){
    console.log(id);
  }

  
  //validation
  const [validateError,setValidateError] = useState([])
  function validateSessionForm(){
    let scheme = Joi.object({
      title : Joi.string().required(),
      subTitle  : Joi.string().required(),
      description : Joi.string().required(),
      date : Joi.string().required(),
      cover_image: Joi.string().required(),
      from: Joi.object().unknown(true),
      till: Joi.object().unknown(true),
      event_id: Joi.array().items(Joi.string()),
      moderator_ids: Joi.array(),
      speaker_ids: Joi.array(),
    })
    return scheme.validate(session,{abortEarly:false})
  }

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); 


  const fetchData = async () => {
    const token = 'eyJhbGciOiJSUzI1NiJ9.eyJpZCI6MjEyLCJ0eXBlIjoidXNlciIsInJhbiI6IkFQWEVFT0hMWEhSWk1ISlRUWFNZIiwic3RhdHVzIjoxfQ.ZgAWMwcCTYvVTARUT8wjxGCpLn5vRsDEt-zpzIPhsRN4np-sqWZ6YpCOPZsD40MWPjCfAepXdLIRW6JLiJYla8AHTogRMY-UIyqq8KvxhO8euOGVLLm6-jbhws7h4uznwQrc8mb8IywKm0Qagm2i5NdM9bRotWWW3viNXVxAOXfpx5ciRCSLlCAEisC47s5n7GM2ytT2BIeLEnSK1p9XvrF7-1Z-F8yjsKTG29wjejjZcanvY2_j53nR62glm-ZvIhP6jXPLlEaE1jttfOYC3BaJSHbdYdEXzSLzsAaB2HI1ZmtFdat7d0cKsSvCgu6Z73uzvC6oOtbhywQQfu2lOw';

    axios.get('https://qa-testing-backend-293b1363694d.herokuapp.com/api/v3/get-users?event_id=8&offset=0&limit=1000', 
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }    
    )
    .then(response => {
      let handleUser =  response.data.users     
      handleUser.map((user) => {
        user.label = user.first_name + " " + user.last_name
        user.value = user.first_name + " " + user.last_name
      }) 
      setUsers(handleUser)
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };



    //submit form
    async  function  submitSessionForm(e){
      e.preventDefault()
      
    //call validation function
    let validateResult =  validateSessionForm()
    const token = 'eyJhbGciOiJSUzI1NiJ9.eyJpZCI6MjEyLCJ0eXBlIjoidXNlciIsInJhbiI6IkFQWEVFT0hMWEhSWk1ISlRUWFNZIiwic3RhdHVzIjoxfQ.ZgAWMwcCTYvVTARUT8wjxGCpLn5vRsDEt-zpzIPhsRN4np-sqWZ6YpCOPZsD40MWPjCfAepXdLIRW6JLiJYla8AHTogRMY-UIyqq8KvxhO8euOGVLLm6-jbhws7h4uznwQrc8mb8IywKm0Qagm2i5NdM9bRotWWW3viNXVxAOXfpx5ciRCSLlCAEisC47s5n7GM2ytT2BIeLEnSK1p9XvrF7-1Z-F8yjsKTG29wjejjZcanvY2_j53nR62glm-ZvIhP6jXPLlEaE1jttfOYC3BaJSHbdYdEXzSLzsAaB2HI1ZmtFdat7d0cKsSvCgu6Z73uzvC6oOtbhywQQfu2lOw';

      
      //if the validation function return error
      if(validateResult.error){
        setValidateError(validateResult.error.details)
      }else{
        session.event_id =8
        axios({
          method: 'POST', 
          url: 'https://qa-testing-backend-293b1363694d.herokuapp.com/api/v3/create-sessions',
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: session
        })
          .then(response => {
            navigate('/')
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
                  <h4 className="p-2 ps-3 text-white  ">New Sessions</h4>
              </div>
            <div className="d-flex align-items-center justify-content-between "> 
                <Link to="/" className="p-2 px-4 fw-bolder cancel-btn  text-white d-flex align-items-center justify-content-center text-dark text-decoration-none" >
                  <span >Cancel</span>
                </Link>
                <button  id="submitButton" type="submit" form="myForm"  className="p-2 px-4 fw-bolder bg-white  text-dark d-flex align-items-center justify-content-center text-dark text-decoration-none" >
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

                {/* upload image */}
                <DropzoneDragDrop onFileDrop={handleFileDrop} data={validateError}/>

                {/* time and date */}
                <div className="row">
                  <div className="col-6">
                      <label className='mt-4 mb-2 sessions-body-color d-flex align-items-start' htmlFor="date"  >Date   { validateError.map((error, index) => error.message.includes('date') ? <div key={index} className='error d-flex  mx-1 pt-1'> <img src="star.svg"/></div>:"")}  </label>
                      <input onChange={getSessionData}  className={(session.date) ? 'date-input--has-value form-control' : 'form-control'}   type="date"  id='date'name='date'  placeholder='Start Typing...' />
                  </div>
                  <div className="col-3">
                      <label className='mt-4 mb-2 sessions-body-color d-flex align-items-start' htmlFor="from"  >From    { validateError.map((error, index) => error.message.includes('from') ? <div key={index} className='error d-flex  mx-1 pt-1'> <img src="star.svg"/></div>:"")} </label>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer
                        components={['MobileTimePicker', 'MobileTimePicker', 'MobileTimePicker']}
                      >
                        <DemoItem >
                          <TimePicker views={['hours', 'minutes']}  onChange={handleFromTimeChange} />
                        </DemoItem>          
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                  <div className="col-3">
                      <label className='mt-4 mb-2 sessions-body-color d-flex align-items-start' htmlFor="till"  >Till   { validateError.map((error, index) => error.message.includes('till') ? <div key={index} className='error d-flex  mx-1 pt-1'> <img src="star.svg"/></div>:"")}  </label>
                      <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DemoContainer
                        components={['MobileTimePicker', 'MobileTimePicker', 'MobileTimePicker']}                      
                      >
                        <DemoItem >
                          <TimePicker  views={['hours', 'minutes']}  onChange={handleTillTimeChange} />
                        </DemoItem>          
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                </div>            

              
                <label className='mt-4 mb-2 sessions-body-color d-flex align-items-start' htmlFor="description"  >Description   { validateError.map((error, index) => error.message.includes('description') ? <div key={index} className='error d-flex  mx-1 pt-1'> <img src="star.svg"/></div>:"")}  </label>
                <textarea onChange={getSessionData} className='form-control' rows={3} type="text"  id='description'name='description'  placeholder='Type details'/>
              

                {/* selectors */}
                <hr class="my-5"/>

                <div className="row">
                  <div className="col-11">
                    <label className='mt-3 mb-2 sessions-body-color d-flex align-items-start' htmlFor="speaker">Speaker{ validateError.map((error, index) => error.message.includes('speaker_ids') ? <span key={index} className='error d-flex  mx-1 pt-1'> <img src="star.svg"/></span>:"")}</label>
                    <div>
                        <MultiSelect
                          options={users}
                          value={speakerSelected}
                          onChange={getSpeakerChange}
                          labelledBy="Select"
                          Select="Select-options"                          
                          closeOnChangedValue	={true}

                          />
                          {/* <pre>{JSON.stringify(speakerSelected.length)}</pre> */}
                          {speakerSelected.length > 0?
                              <div className=''>              
                                {speakerSelected.map((speaker,i)=>
                                      <div className='speaker  my-2 ' key={i}>              
                                        <div className='row'>              
                                          <div   className="col col-md-11">
                                            <div className='d-flex align-items-center speaker-info py-3 px-3'>
                                                <img src={speaker.avatar? speaker.avatar : 'person3.svg' } className='rounded-circle' alt="" width={36} height={36}/>
                                                <span className='mx-2'> {speaker.first_name}  {speaker.last_name}</span>
                                                <span class="position"> {speaker.email ? speaker.email : 'email@gmail.com'}</span>
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
                  </div>
                  <div className="col-1">
                    <div className='d-flex justify-content-end'>
                        <Link to="/create-user" className="p-2 px-4 fw-bolder   text-white d-flex align-items-center justify-content-center text-dark text-decoration-none" >
                            <img src="pluse.svg" className="mt-5 pt-2 " width={20} alt="" />
                        </Link>
                    </div>
                  </div>
                </div>

                <label className='mt-4 mb-2 sessions-body-color d-flex align-items-start' htmlFor="speaker"> Moderator { validateError.map((error, index) => error.message.includes('moderator_ids') ? <span key={index} className='error d-flex  mx-1 pt-1'> <img src="star.svg"/></span>:"")}</label>
                <div>
                    <MultiSelect
                      options={users}
                      value={moderatorSelected}
                      onChange={getModeratorSelected}
                      labelledBy="Select"
                      Select="Select-options"                      
                      closeOnChangedValue	={true}

                      />
                      {moderatorSelected.length > 0?
                          <div className=''>              
                            {moderatorSelected.map((speaker,i)=>
                                  <div className='speaker  my-2 ' key={i}>              
                                    <div className='row'>              
                                      <div   className="col col-md-11">
                                        {/* {JSON.stringify(speaker)} */}
                                        <div className='d-flex align-items-center speaker-info py-3 px-3'>
                                        <img src={speaker.avatar? speaker.avatar : 'person3.svg' } className='rounded-circle' alt="" width={36} height={36}/>
                                            <span className='mx-2'> {speaker.first_name}  {speaker.last_name}</span>
                                            <span class="position"> {speaker.email ? speaker.email : 'email@gmail.com'}</span>
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
                <label className='mt-4 mb-2 sessions-body-color d-flex align-items-start' htmlFor="speaker"> Venue { validateError.map((error, index) => error.message.includes('event_id') ? <span key={index} className='error d-flex  mx-1 pt-1'> <img src="star.svg"/></span>:"")}</label>
                <div>
                    <MultiSelect
                      options={stadium}
                      value={venueSelected}
                      onChange={getVenueSelected}
                      labelledBy="Select"
                      Select="Select-options"                      
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
 