import React, {useState, useContext, useEffect} from 'react';
import {WindowWidthZoneContext, WINDOW_WIDTH_ZONES} from "../context/WindowWidthZoneContext";
import {NavLink} from "react-router-dom";

const defaultStyle = {
  display: "flex",
  flexFlow: "row nowrap",
};

export const NavLinkList = () => {

  const [style, setStyle] = useState(defaultStyle);

  const windowWidthZone = useContext(WindowWidthZoneContext);

  useEffect(() => {

    if (windowWidthZone === WINDOW_WIDTH_ZONES.DESKTOP) {
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
      <li data-testid={"nav-link-list-item"}>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li data-testid={"nav-link-list-item"}>
        <NavLink to={"/rooms/"}>Rooms</NavLink>
      </li>
    </ul>
  );

};
