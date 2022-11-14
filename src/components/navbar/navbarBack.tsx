import React, { useState } from 'react';
import './navbarBack.css';
import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import { SidebarData } from './sidebarData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <nav>
        <div className='navbar'>
          <div className='logo'>
            <div className='logo-pic'>
              <a href='/home' className='logo-link'>
                <FontAwesomeIcon icon={faChevronLeft} color='white' />
              </a>
            </div>
            <div className='separateLogoLine'></div>
            <div className='project-name'>
              <p className='font-link'>BACK</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
