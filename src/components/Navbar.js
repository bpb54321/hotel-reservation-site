import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import logo from "../images/logo.svg";
import {FaAlignRight} from "react-icons/fa";
import {NavLinkList} from "./NavLinkList";
import {WindowWidthZoneContext, WINDOW_WIDTH_ZONES} from "../context/WindowWidthZoneContext";

export const Navbar = () => {

  const windowWidthZone = useContext(WindowWidthZoneContext);

  return (
    <header data-testid={"navbar"}>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="Beach Resort"/>
        </Link>
        {windowWidthZone === WINDOW_WIDTH_ZONES.MOBILE ?
          <button data-testid={"menu-toggle-button"}>
            <FaAlignRight/>
          </button> :
          null
        }
        <NavLinkList/>
      </nav>
    </header>
  );

};
