import React from 'react';
import { Link } from 'react-router-dom';

import { StyledHeader } from './style';

import logo from '../../assets/logo.svg';
import camera from '../../assets/camera.svg';

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <Link to="/">
        <img src={logo} alt="InstaRocket" />
      </Link>

      <Link to="/newpost">
        <img src={camera} alt="Send" />
      </Link>
    </div>
  </StyledHeader>
);

export default Header;
