import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg nav-bg py-3">
        <div className="container-fluid">
            <Link className="navbar-brand " to="#" >
                    <img src="Frame.svg" alt=""  className="pe-5 me-3"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="mx-auto  d-flex align-items-center justify-content-center  pt-4 pt-lg-0">
                    <div className="bg-new-gray px-3 py-2 d-flex align-items-center ">
                        <div className='d-flex align-items-center  pe-5'>
                            <img src="cup.svg" alt=""  className=" pe-1"/>
                            <span className='fs-6 fw-bold'>WorldCup 2022 Event</span>
                        </div>
                            <img src="arrow1.svg" alt=""  className="ps-5 ms-5"/>
                    </div>
                </div>
                <div className="d-flex justify-content-center pt-4 pt-lg-0 ">
                    <div className="mx-2">                
                        <div className='bg-new-gray px-2 py-2'>
                            <img src="Notifications.svg" alt=""  className=""/>
                        </div>
                    </div>
                    <div>
                    <div className="bg-new-gray px-3 py-2 d-flex align-items-center">
                        <div className='d-flex align-items-center'>
                            <img src="Ellipse.svg" alt=""  className=" pe-2"/>
                            <span className='fs-6 '>Jane Doe</span>
                        </div>
                            <img src="arrow1.svg" alt=""  className="ps-2"/>
                        </div>
                    </div>
                </div>      
            </div>
        </div>
    </nav>
    </>
  )
}
