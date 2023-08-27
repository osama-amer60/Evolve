import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar(props) {
  return (
    <>
   <div className='container-fluid sidebar'>
    <div>
        <ul>
            <li>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <li><Link className="dropdown-item active" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                <li></li>
                <li><Link className="dropdown-item" to="#">Separated link</Link></li>
              </ul>
            </div>
            </li>
        </ul>
    </div>
   </div>
    </>
  )
}
