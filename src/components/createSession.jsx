import React from 'react'
import { Link } from 'react-router-dom'




export default function NavBar(props) {
  return (
    <>
    <div className='sessions'>
      <div className='container-fluid  '>
        <div class="d-flex align-items-start justify-content-between py-3 px-2">
            <div class="">
                <Link to="/" className=" d-flex align-items-center text-decoration-none" >
                    <img src="leftArrow.svg" alt="" className='me-1'  />
                    <span class="all-sessions-color ">All Sessions</span>
                </Link>
                <h4 class="p-2 ps-3 text-white  ">New Sessions</h4>
            </div>
          <div class="d-flex align-items-center justify-content-between "> 
              <Link to="/" className="p-2 px-4 fw-bolder cancel-btn  text-white d-flex align-items-center justify-content-center text-dark text-decoration-none" >
                <span >Cancel</span>
              </Link>
              <Link to="#" className="p-2 px-4 fw-bolder bg-white  text-dark d-flex align-items-center justify-content-center text-dark text-decoration-none" >
                <span >Next</span>
              </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
