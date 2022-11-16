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
          <Link to='/home'>
            <button className='tb'>
              <span className='font-link'>{'< BACK'}</span>
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBarBack;
