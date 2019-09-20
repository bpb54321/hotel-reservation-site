import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import logo from "../images/logo.svg";
import {FaAlignRight} from "react-icons/all";
import {NavLinkList} from "./NavLinkList";
import {WindowWidthZoneContext, windowWidthZones} from "../context/WindowWidthZoneContext";

export const Navbar = () => {

  const windowWidthZone = useContext(WindowWidthZoneContext);

  return (
    <header>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="Beach Resort"/>
        </Link>
        {windowWidthZone === windowWidthZones.MOBILE ?
          <button>
            <FaAlignRight/>
          </button> :
          null
        }
        <NavLinkList/>
      </nav>
    </header>
  );

};
