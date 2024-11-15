import React, { useRef, useEffect } from 'react';
import Image from "../logo.png"
import '../styleSheets/Nav.css'
import {FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom';


function Header() {
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;

    // Hover animation handler
    const handleHover = function (e, opacity) {
      if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');

        // Set opacity
        siblings.forEach(el => {
          if (el !== link) el.style.opacity = opacity;
        });
        logo.style.opacity = opacity;
      }
    };

    // Event listeners for mouseover and mouseout
    const handleMouseOver = (e) => handleHover(e, 0.5);
    const handleMouseOut = (e) => handleHover(e, 1);

    nav.addEventListener('mouseover', handleMouseOver);
    nav.addEventListener('mouseout', handleMouseOut);

    // Cleanup event listeners on component unmount
    return () => {
      nav.removeEventListener('mouseover', handleMouseOver);
      nav.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className='header'>
      <nav className="nav" ref={navRef}>
        <Link to="/" ><img src={Image} alt="CAREERHUB" className="nav__logo" id="logo" /></Link>
        <ul className="nav__links">
          <li className="nav__item">
            <Link to="/carrerexp" className='nav__link'>Carrer Explorer</Link>
          </li>
          <li className="nav__item">
            <Link to="/learnhub" className='nav__link'>Learn Hub</Link>
          </li>
          <li className="nav__item">
            <a className="nav__link ">Protfolio Creater</a>
          </li>
          <li className="nav__item">
            <a className="nav__link ">Job Roles</a>
          </li>
          <li className="nav__item">
            <FaUser className='logo'/>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
