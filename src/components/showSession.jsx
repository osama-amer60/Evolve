import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Joi from 'joi'
import axios from 'axios'
import DropzoneDragDrop from './DropzoneDragDrop'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MultiSelect } from "react-multi-select-component";


export default function ShowSession(props) {

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


  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    const token = 'eyJhbGciOiJSUzI1NiJ9.eyJpZCI6MjEyLCJ0eXBlIjoidXNlciIsInJhbiI6IkFQWEVFT0hMWEhSWk1ISlRUWFNZIiwic3RhdHVzIjoxfQ.ZgAWMwcCTYvVTARUT8wjxGCpLn5vRsDEt-zpzIPhsRN4np-sqWZ6YpCOPZsD40MWPjCfAepXdLIRW6JLiJYla8AHTogRMY-UIyqq8KvxhO8euOGVLLm6-jbhws7h4uznwQrc8mb8IywKm0Qagm2i5NdM9bRotWWW3viNXVxAOXfpx5ciRCSLlCAEisC47s5n7GM2ytT2BIeLEnSK1p9XvrF7-1Z-F8yjsKTG29wjejjZcanvY2_j53nR62glm-ZvIhP6jXPLlEaE1jttfOYC3BaJSHbdYdEXzSLzsAaB2HI1ZmtFdat7d0cKsSvCgu6Z73uzvC6oOtbhywQQfu2lOw';

    axios.get('https://qa-testing-backend-293b1363694d.herokuapp.com/api/v3/session-details/174?event_id=8', 
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }    
    )
    .then(response => {
      setSession(response.data)
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };


  

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
                  <h4 className="p-2 ps-3 text-white  ">Show Session</h4>
              </div>
            <div className="d-flex align-items-center justify-content-between "> 
                <Link to="/" className="p-2 px-4 fw-bolder cancel-btn  text-white d-flex align-items-center justify-content-center text-dark text-decoration-none" >
                  <span >Cancel</span>
                </Link>
                <Link to="/"  className="p-2 px-4 fw-bolder bg-white  text-dark d-flex align-items-center justify-content-center text-dark text-decoration-none" >
                  <span >Next</span>
                </Link>
              
            </div>
          </div>
        </div>

        <div className="container ">
        <div className='mx-xl-5'>
            {!session.till ? 
                 <div className='pt-5 mt-5 d-flex '>
                  <div className="spinner-border text-light  mx-auto" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                 </div> 
               :
               <div className="form-container mx-xl-5  p-4 p-xl-5">
               <form id="myForm" className=''>
                   
                   <label className='mt-3 mb-2 sessions-body-color d-flex align-items-start' htmlFor="title">Session Title </label>
                   <input disabled className='form-control'  type="text"  id='title' name='title' value={session.title} placeholder='Start Typing...'/>
                   
                   <label className='mt-4 mb-2 sessions-body-color d-flex align-items-center justify-content-between' htmlFor="subTitle">
                     <div className='d-flex align-items-start'>Session Subtitle  </div> 
                     <div className='note'>
                       <img src="question.svg" alt="" />
                       <div className='bg-dark text-white p-3 ps-4 note-content'>
                             Unique info about <br />
                             the session, that will be<br />
                             displayed under the title
                       </div>
                     </div>
                   </label>
                   <input disabled className='form-control' type="text"  id='subTitle'name='subTitle' value={session.subtitle}  placeholder='Start Typing...' />          
   
                   {/* upload image */}
                   <DropzoneDragDrop image={session.cover_image}/>
   
                   {/* time and date */}
                   <div className="row">
                     <div className="col-6">
                         <label className='mt-4 mb-2 sessions-body-color d-flex align-items-start' htmlFor="date"  >Date    </label>
                         <input disabled value={session.date}  className={(session.date) ? 'date-input--has-value form-control' : 'form-control'}   type="date"  id='date'name='date'  placeholder='Start Typing...' />
                     </div>
                     <div className="col-3">
                         <label className='mt-4 mb-2 sessions-body-color d-flex align-items-start' htmlFor="from"  >From    </label>
                         <LocalizationProvider dateAdapter={AdapterDayjs}>
                         <DemoContainer
                           components={['MobileTimePicker', 'MobileTimePicker', 'MobileTimePicker']}
                         >
                           <DemoItem >
                             <TimePicker  value={session.from}  views={['hours', 'minutes']}  />
                           </DemoItem>          
                         </DemoContainer>
                       </LocalizationProvider>
                     </div>
                     <div className="col-3">
                         <label className='mt-4 mb-2 sessions-body-color d-flex align-items-start' htmlFor="till"  >Till   </label>
                         <LocalizationProvider dateAdapter={AdapterDayjs} >
                         <DemoContainer
                           components={['MobileTimePicker', 'MobileTimePicker', 'MobileTimePicker']}                      
                         >
                           <DemoItem >
                             <TimePicker  value={session.till}  views={['hours', 'minutes']}   />
                           </DemoItem>          
                         </DemoContainer>
                       </LocalizationProvider>
                     </div>
                   </div>            
   
                 
                   <label className='mt-4 mb-2 sessions-body-color d-flex align-items-start' htmlFor="description"  >Description     </label>
                   <textarea disabled className='form-control' rows={3} type="text"  id='description'name='description' value={session.description}  placeholder='Type details'/>
                 
   
                   {/* selectors */}
                   <hr className="my-5"/>
                   <label className='mt-3 mb-2 sessions-body-color d-flex align-items-start' htmlFor="speaker">Speaker</label>
                   <div>
                       <MultiSelect
                         options={[]}
                         value={[]}
                         
                         labelledBy="Select"
                         Select="Select-options"
                         closeOnChangedValue	={true}
   
                         />
                         {/* <pre>{JSON.stringify(speakerSelected.length)}</pre> */}
                         {session?.moderators?.length > 0?
                             <div className=''>              
                               {session.moderators.map((speaker,i)=>
                                     <div className='speaker  my-2 ' key={i}>              
                                       <div className='row'>              
                                         <div   className="col col-md-11">
                                           <div className='d-flex align-items-center speaker-info py-3 px-3'>
                                               <img src={speaker.avatar? speaker.avatar :"person3.svg"} alt="" width={36} height={36}/>
                                               <span className='mx-2'> {speaker.first_name}  {speaker.last_name}</span>
                                               <span className="position"> {speaker.position}</span>
                                           </div>
                                         </div>
                                         <div className="col col-1 ">
                                           <div className='d-flex align-items-center justify-content-center w-100 h-100'>
                                               <img src="delete.svg" alt=""   width={28} height={28}/>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                               )}
                             </div>:""}
                   </div>    
   
                   <label className='mt-4 mb-2 sessions-body-color d-flex align-items-start' htmlFor="speaker"> Moderator</label>
                   <div>
                       <MultiSelect
                         options={[]}
                         value={[]}
                         labelledBy="Select"
                         Select="Select-options"
                         isCreatable={true}
                         closeOnChangedValue	={true}
   
                         />
                         {session?.speakers?.length > 0?
                             <div className=''>              
                               {session.speakers.map((speaker,i)=>
                                     <div className='speaker  my-2 ' key={i}>              
                                       <div className='row'>              
                                         <div   className="col col-md-11">
                                           {/* {JSON.stringify(speaker)} */}
                                           <div className='d-flex align-items-center speaker-info py-3 px-3'>
                                               <img  src={speaker.avatar? speaker.avatar :"person3.svg"} alt="" width={36} height={36}/>
                                               <span className='mx-2'> {speaker.first_name}  {speaker.last_name}</span>
                                               <span className="position"> {speaker.position}</span>
                                           </div>
                                         </div>
                                         <div className="col col-1 ">
                                           <div className='d-flex align-items-center justify-content-center w-100 h-100'>
                                               <img src="delete.svg" alt=""   width={28} height={28}/>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                               )}
                             </div>:""}
                   </div>
   
         
                   <hr className="my-5"/>
                   <label className='mt-4 mb-2 sessions-body-color d-flex align-items-start' htmlFor="Venue"> Venue</label>
                   <div>
                       <MultiSelect
                         options={[]}
                         value={[]}
                         labelledBy="Select"
                         Select="Select-options"
                         closeOnChangedValue	={true}
   
                         />
                             <div className=''>              
                                     <div className='speaker  my-2 '>              
                                       <div className='row'>              
                                         <div   className="col col-md-12">
                                           <div className='d-flex align-items-center speaker-info py-3 px-3'>
                                               <img src={session?.venue?.image} alt="" width={180} height={100}/>
                                             <div className='mx-3'>
                                                 <h4 > <strong>{session?.venue?.name} </strong></h4>
                                                 <p className="position">Venue Capacity:  {session?.venue?.capacity}</p>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>                           
                             </div>
                   </div>
                 </form> 
               </div>}
          </div>
        </div>
      </div>
    </>
  )
}
 