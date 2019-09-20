import React, {useState, useContext, useEffect} from 'react';
import {WindowWidthZoneContext, windowWidthZones} from "../context/WindowWidthZoneContext";
import {NavLink} from "react-router-dom";

const defaultStyle = {
  display: "flex",
  flexFlow: "row nowrap",
};

export const NavLinkList = () => {

  const [style, setStyle] = useState(defaultStyle);

  const windowWidthZone = useContext(WindowWidthZoneContext);

  useEffect(() => {

    if (windowWidthZone === windowWidthZones.DESKTOP) {
      setStyle({
        ...defaultStyle,
        flexFlow: "row nowrap",
      });
    } else {
      setStyle({
        ...defaultStyle,
        flexFlow: "column nowrap",
      });
    }

  }, [windowWidthZone]);

  return (
    <ul style={style}>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/rooms/"}>Rooms</NavLink>
      </li>
    </ul>
  );

};
