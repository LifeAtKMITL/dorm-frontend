import React, { useState } from 'react';
import './navbar.css';
import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import { SidebarData } from './sidebarData';

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
              <a href='#' className='logo-link'>
                <img className='logo-img' src={logo} alt='' />
              </a>
            </div>
            <div className='separateLogoLine'></div>
            <div className='project-name'>
              <p className='font-link'>DOOHEE</p>
            </div>
          </div>
          <div className='menu-bars' onClick={showSidebar}>
            <Hamburger color='#15cd64' toggled={isOpen} rounded toggle={setOpen} />
          </div>
        </div>
      </nav>
      <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-munu-items'>
          <li className='navbar-toggle'>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <div className='itemX'>
                      <span className='font-link'>{item.title}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
