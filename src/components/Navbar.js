import React, {useState, useEffect} from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from "../images/logo.svg";
import {FaAlignRight} from "react-icons/all";

const screenWidthZones = {
  "MOBILE": "mobile",
  "DESKTOP": "desktop",
};

const defaultListStyle = {
  display: "flex",
  flexFlow: "row nowrap",
};

function getScreenWidthZone() {
  if (document.documentElement.clientWidth >= 768) {
    return screenWidthZones.DESKTOP;
  } else {
    return screenWidthZones.MOBILE;
  }
}

export const Navbar = () => {
  const [screenWidthZone, setScreenWidthZone] = useState(getScreenWidthZone());
  const [listStyle, setListStyle] = useState(defaultListStyle);
  
  useEffect(() => {
    console.log(`Add "resize" event listener to window`);
    window.addEventListener("resize", (event) => {
      console.log(`Fire "resize" callback.`);
      setScreenWidthZone(getScreenWidthZone());
    });
  }, []);

  useEffect(() => {
    console.log(`Calculate listStyle`);
    if (screenWidthZone === screenWidthZones.DESKTOP) {
      setListStyle({
        ...defaultListStyle,
        flexFlow: "row nowrap",
      });
    } else {
      setListStyle({
        ...defaultListStyle,
        flexFlow: "column nowrap",
      });
    }
  }, [screenWidthZone]);

  return (
    <header>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="Beach Resort"/>
        </Link>
        {screenWidthZone === screenWidthZones.MOBILE ?
          <button>
            <FaAlignRight/>
          </button> :
          null
        }
        <ul style={listStyle}>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/rooms/"}>Rooms</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
