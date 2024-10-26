import React, { useState, useEffect }  from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import Logo from  "../../assets/pictures/logo_red.png"

function Nav() {
    /*const [home, setHome] = useState(false);
    const [sources, setSources] = useState(false);
    const [contact, setContact] = useState(false);*/

    return (
      <div className="Nav">
                <NavLink to="/" className="navLinkLogo">
                    <img src={Logo} alt="Logo Indivisibles" className="logo" />
                </NavLink>
                <NavLink to="/" className="navLink" class ="btn" type="button" data-toggle="button"  aria-pressed="false" autocomplete="off">
                    HOME
                </NavLink>
                <NavLink to="/sources" className="navLink" class ="btn" type="button" data-toggle="button"  aria-pressed="false" autocomplete="off">
                    NOS SOURCES
                </NavLink>
                <NavLink to="/arcom" className="navLink" class ="btn" type="button" data-toggle="button"  aria-pressed="false" autocomplete="off">
                    ARCOM
                </NavLink>
                <NavLink to="/contact" className="navLink" class ="btn" type="button" data-toggle="button"  aria-pressed="false" autocomplete="off">
                    CONTACT
                </NavLink>
            
    </div>
  );
}

export default Nav;