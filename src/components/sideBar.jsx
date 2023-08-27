import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar(props) {
  return (
    <>
   <div className='container-fluid sidebar'>
    <div>
        <ul>
            <li>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <li><a class="dropdown-item active" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
            </li>
        </ul>
    </div>
   </div>
    </>
  )
}
