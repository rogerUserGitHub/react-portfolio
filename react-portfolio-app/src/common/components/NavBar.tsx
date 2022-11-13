import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to='/'>Homepage</Link>
      </li>
      <li>
        <Link to='/projects'>Projects</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
    </ul>
  );
};

export default NavBar;
