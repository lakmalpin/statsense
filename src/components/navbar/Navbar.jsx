import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/stat-sense-consulting-logo.png';
import './navbar.css';

//BEM -> classname naming convention

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#whatstatsense">What is Stat Sense?</a></p>
    <p><a href="#possibility">Possibility</a></p>
    <p><a href="#features">Features</a></p>
    <p><a href="#blog">Blog</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="statsense__navbar">
      <div className="statsense__navbar-links">
         <div className="statsense__navbar-links_logo gradient__text">
          <p>Stat Sense Consulting</p>
          {/* <img src={logo} alt="logo"/> */}
         </div>
         <div className='statsense__navbar-links_container'>
          <Menu />
         </div>
      </div>
      <div className='statsense__navbar-sign'>
        <button type="button">Contact Me</button>
      </div>
      <div className='statsense__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={()=> setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={()=> setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='statsense__navbar-menu_container scale-up-center'>
            <Menu />
            <div className='statsense__navbar-menu_container-links-sign'>
              <button type="button">Contact Me</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar