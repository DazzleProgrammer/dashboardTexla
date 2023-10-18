import React from 'react';
import './Navbar.css';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { Avatar, IconButton } from '@mui/material';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import PeopleTwoToneIcon from '@mui/icons-material/PeopleTwoTone';


function Navbar() {
  return (
      <div className='navbar'>
          <IconButton >  
              <SearchTwoToneIcon />
          </IconButton > 
          

          <div className="nav__right">
              
              <img src="https://cdn-icons-png.flaticon.com/128/555/555417.png" alt="" /> 

              <IconButton > <NotificationsNoneTwoToneIcon /> </IconButton>

              <IconButton > <PeopleTwoToneIcon /> </IconButton>

              <IconButton > <Avatar src= "https://thispersondoesnotexist.com" /> </IconButton>
              
          </div>
      
      
          
    </div>
  )
}

export default Navbar;
