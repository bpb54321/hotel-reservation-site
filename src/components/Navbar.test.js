import React from "react";
import {Navbar} from "./Navbar";
import {
  render
} from "@testing-library/react";
import {WindowWidthZoneContext} from "../context/WindowWidthZoneContext";
import {BrowserRouter} from "react-router-dom";
import {WINDOW_WIDTH_ZONES} from "../context/WindowWidthZoneContext";

describe(`Navbar`, () => {

  it(`show the hamburger icon when in the mobile screen zone`, () => {

    const wrapper = render(
      <BrowserRouter>
        <WindowWidthZoneContext.Provider value={WINDOW_WIDTH_ZONES.DESKTOP}>
          <Navbar/>
        </WindowWidthZoneContext.Provider>
      </BrowserRouter>
    );

    expect(wrapper.queryByTestId("menu-toggle-button")).toBeNull();

  });

  it(`hides the hamburger icon when in the desktop screen zone`, () => {

    const wrapper = render(
      <BrowserRouter>
        <WindowWidthZoneContext.Provider value={WINDOW_WIDTH_ZONES.MOBILE}>
          <Navbar/>
        </WindowWidthZoneContext.Provider>
      </BrowserRouter>
    );

    expect(wrapper.queryByTestId("menu-toggle-button")).not.toBeNull();

  });

});
