import React, { useState } from 'react';
import './navBack.css';
import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import { BsBackspace } from 'react-icons/bs';

const NavBarBack = () => {
  return (
    <div>
      <nav>
        <div className='navbarX'>
          <a href='/home'>
            <button className='tb'>
              <span className='font-link'>{'< BACK'}</span>
            </button>
          </a>
          <div className='logoX'>
            <div className='logo-picX'>
              <a href='/' className='logo-linkX'>
                <img className='logo-imgX' src={logo} alt='' />
              </a>
            </div>
            {/* <div className='separateLogoLine'></div> */}
            <div className='text-sm text-white font-link mx-2'>X</div>
            <div className='project-nameX'>
              <p className='font-link text-[#15cd64] text-lg'>DOOHOR</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBarBack;
