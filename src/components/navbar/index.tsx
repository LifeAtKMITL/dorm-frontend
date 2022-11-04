import React, { useState } from 'react';
import './navbar.css';
import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';

import { Divide as Hamburger } from 'hamburger-react';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className='navbar'>
          <div className='logo'>
            <div className='logo-pic'>
              <a href='#' className='logo-link'>
                <img className='logo-img' src={logo} alt='' />
              </a>
            </div>
            <div className='separateLogoLine'></div>
            <div className='project-name'>
              <p className='font-link'>DOOHEE</p>
            </div>
          </div>
          <div className='hamburger'>
            <Hamburger color='#15cd64' toggled={isOpen} rounded toggle={setOpen} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
