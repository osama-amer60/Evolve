import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <>
    <div className='sessions'>
      <div className='container-fluid  '>
        <div className="d-flex align-items-center justify-content-between py-3 px-2">
          <h4 className="p-2 text-white  ">All Sessions</h4>
          <div className=""> 
              <Link to="create-session" className="p-2 px-3 bg-white  text-dark d-flex align-items-center justify-content-center text-dark text-decoration-none" >
                <img src="add.svg" alt="" className="me-2"/>
                <span >New Session</span>
              </Link>
          </div>
        </div>

        <div className='sessions-list   py-3 px-2'>
          <div className='sessions-list-head sessions-head-bg sessions-head-color py-2-5 px-3 sessions-border'>
              <div className="row">
                  <div className="col-lg-6 col-md-4 col-sm-6 text-center" >
                    <div>
                      Session Name
                        <img src="grayArrow.svg" alt="" className='mx-1' />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 text-center" >
                    <div>
                      Date
                        <img src="grayArrow.svg" alt="" className='mx-1' />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 text-center" >
                    <div>
                      Time
                        <img src="grayArrow.svg" alt="" className='mx-1' />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6" >
                    <div>
                      Venue
                        <img src="grayArrow.svg" alt="" className='mx-1' />
                    </div>
                  </div>
              </div>
          </div>
          <div className='sessions-list-body sessions-body-bg sessions-body-color py-3 px-3 sessions-border'>
              <div className="row">
                  <div className="col-lg-6 col-md-4 col-sm-6  text-white" >
                    <div>
                        <img src="session.png" alt="" className='me-2' width={35} height={35} />
                        <span>QAT vs ECU </span>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 text-center" >
                    <div>
                        <img src="Itinerary.svg" alt="" className='mx-1' />
                        <span>Sep/08/2022</span>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 text-center" >
                    <div>
                        <img src="clock-time.png" alt="" className='mx-1' />
                        <span>00:00 - 00:00</span>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6" >
                    <div className='d-flex align-items-center justify-content-between'>
                        <span>Lussail Std</span>
                        <Link className="" to="edit-session/5"><img src="Edit.svg" alt="" className='mx-1' /> </Link>
                        <Link className="" to="show"><img src="Chevron right.svg" alt="" className='mx-1' /> </Link>
                        
                    </div>
                  </div>
              </div>
          </div>
      
          <div className='sessions-list-body sessions-body-bg sessions-body-color py-3 px-3 sessions-border'>
              <div className="row">
                  <div className="col-lg-6 col-md-4 col-sm-6  text-white" >
                    <div>
                        <img src="session.png" alt="" className='me-2' width={35} height={35} />
                        <span>QAT vs ECU </span>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 text-center" >
                    <div>
                        <img src="Itinerary.svg" alt="" className='mx-1' />
                        <span>Sep/08/2022</span>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 text-center" >
                    <div>
                        <img src="clock-time.png" alt="" className='mx-1' />
                        <span>00:00 - 00:00</span>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6" >
                    <div className='d-flex align-items-center justify-content-between'>
                        <span>Lussail Std</span>
                        <Link className="" to="edit-session/5"><img src="Edit.svg" alt="" className='mx-1' /> </Link>
                        <Link className="" to="show"><img src="Chevron right.svg" alt="" className='mx-1' /> </Link>
                        
                    </div>
                  </div>
              </div>
          </div>
      
          <div className='sessions-list-body sessions-body-bg sessions-body-color py-3 px-3 sessions-border'>
              <div className="row">
                  <div className="col-lg-6 col-md-4 col-sm-6  text-white" >
                    <div>
                        <img src="session.png" alt="" className='me-2' width={35} height={35} />
                        <span>QAT vs ECU </span>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 text-center" >
                    <div>
                        <img src="Itinerary.svg" alt="" className='mx-1' />
                        <span>Sep/08/2022</span>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 text-center" >
                    <div>
                        <img src="clock-time.png" alt="" className='mx-1' />
                        <span>00:00 - 00:00</span>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6" >
                    <div className='d-flex align-items-center justify-content-between'>
                        <span>Lussail Std</span>
                        <Link className="" to="edit-session/5"><img src="Edit.svg" alt="" className='mx-1' /> </Link>
                        <Link className="" to="show"><img src="Chevron right.svg" alt="" className='mx-1' /> </Link>
                        
                    </div>
                  </div>
              </div>
          </div>
      
          <div className='sessions-list-body sessions-body-bg sessions-body-color py-3 px-3 sessions-border'>
              <div className="row">
                  <div className="col-lg-6 col-md-4 col-sm-6  text-white" >
                    <div>
                        <img src="session.png" alt="" className='me-2' width={35} height={35} />
                        <span>QAT vs ECU </span>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 text-center" >
                    <div>
                        <img src="Itinerary.svg" alt="" className='mx-1' />
                        <span>Sep/08/2022</span>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 text-center" >
                    <div>
                        <img src="clock-time.png" alt="" className='mx-1' />
                        <span>00:00 - 00:00</span>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6" >
                    <div className='d-flex align-items-center justify-content-between'>
                        <span>Lussail Std</span>
                        <Link className="" to="edit-session/5"><img src="Edit.svg" alt="" className='mx-1' /> </Link>
                        <Link className="" to="show"><img src="Chevron right.svg" alt="" className='mx-1' /> </Link>
                        
                    </div>
                  </div>
              </div>
          </div>
      

        </div>
      </div>
    </div>
    </>
  )
}
