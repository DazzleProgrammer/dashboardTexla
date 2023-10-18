import React from 'react';
import './Sidebar.css';
import SpeedIcon from '@mui/icons-material/Speed';
import { IconButton } from '@mui/material';
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='logo'>
         <h1> <span className='logo__box'> Texla  </span>Culture</h1>
      </div>


      <div className='menu'>
        <p className='menu__title'>General</p>
        <div className="menu__list">

          <div className="menu__item">
          <IconButton >   
          <SpeedIcon /> 
          </IconButton>
          
          <h4>Dashboard </h4>
          <KeyboardArrowRightIcon />
          </div>

          <div className="menu__item">
            <IconButton >   
          <BusinessTwoToneIcon /> 
          </IconButton>
          
            <h4>Companies </h4>
            
            <KeyboardArrowRightIcon />

          </div>


          <div className="menu__item">
            <IconButton >   
          <BusinessTwoToneIcon /> 
          </IconButton>
          
            <h4>Support & Tickets </h4>
            
            <KeyboardArrowRightIcon />

          </div>

          <div className="menu__item">
          <IconButton >   
          <BusinessTwoToneIcon /> 
          </IconButton>
          
            <h4>User Admin  </h4>
            
            <KeyboardArrowRightIcon />

          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar;
