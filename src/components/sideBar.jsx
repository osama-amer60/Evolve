import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


export default function NavBar(props) {
  const [collapsed, setCollapsed] = React.useState(false);


  return (
    <>
  
   <div className='container-fluid sidebar'>
   <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
      <Sidebar collapsed={collapsed}>
     
          <Menu>
          <MenuItem   className="main-menu pt-4" component={<Link to="/" />}> <img src="home.svg" alt=""  width={40}/> Home</MenuItem>
            <SubMenu className="main-menu " label="Planning" icon={<img src="planning.svg" alt="" className="" width={40} />}>
              <MenuItem component={<Link to="/" />}> <img src="whiteDot.svg" alt=""  className="" width={40}/> Sessions</MenuItem>
              <MenuItem component={<Link to="/" />}> <img src="dot.svg" alt=""  className="" width={40}/> Venues</MenuItem>
            </SubMenu>
            <SubMenu className="main-menu " label="Attendees" icon={<img src="attendees.svg" alt="" className="" width={40} />}>
              <MenuItem component={<Link to="/" />}> <img src="whiteDot.svg" alt=""  className="" width={40}/> Sessions</MenuItem>
              <MenuItem component={<Link to="/" />}> <img src="dot.svg" alt=""  className="" width={40}/> Venues</MenuItem>
            </SubMenu>
            <SubMenu className="main-menu " label="Settings" icon={<img src="settings.svg" alt="" className="" width={40} />}>
              <MenuItem component={<Link to="/" />}> <img src="whiteDot.svg" alt=""  className="" width={40}/> Sessions</MenuItem>
              <MenuItem component={<Link to="/" />}> <img src="dot.svg" alt=""  className="" width={40}/> Venues</MenuItem>
            </SubMenu>

          </Menu>
      </Sidebar>
          <main style={{ padding: 10 }}>
            <div>
              <button className="sb-button collapse-btn" onClick={() => setCollapsed(!collapsed)}>
              <img src="arrow.svg" alt=""  className="ms-5 ps-5" width={75}/>

              </button>
            </div>
        </main>
    </div>
   </div>
    </>
  )
}
