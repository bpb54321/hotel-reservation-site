import React from "react";
import {NavLinkList} from "./NavLinkList";
import {
  act,
  render,
  waitForElement,
} from "@testing-library/react";
import {WindowWidthZoneContext} from "../context/WindowWidthZoneContext";
import {BrowserRouter} from "react-router-dom";
import {WINDOW_WIDTH_ZONES} from "../context/WindowWidthZoneContext";

describe(`NavLinkList`, () => {

  let wrapper;

  it(`aligns the links horizontally when the window width zone is desktop`, () => {

    act(() => {
      wrapper = render(
        <BrowserRouter>
          <WindowWidthZoneContext.Provider value={WINDOW_WIDTH_ZONES.DESKTOP}>
            <NavLinkList/>
          </WindowWidthZoneContext.Provider>
        </BrowserRouter>
      );
    });

    const listItems = wrapper.getAllByTestId(`nav-link-list-item`);
    /**
     * @type {DOMRect}
     */
    let previousItemBoundingRect;
    for (let i = 0; i < listItems.length; i++) {
      const listItem = listItems[i];
      const currentItemBoundingRect = listItem.getBoundingClientRect();
      if (i > 0) {
        expect(previousItemBoundingRect.right).toBeLessThan(currentItemBoundingRect.left);
        expect(previousItemBoundingRect.top).toBe(currentItemBoundingRect.top);
        expect(previousItemBoundingRect.bottom).toBe(currentItemBoundingRect.bottom);
      }

      previousItemBoundingRect = currentItemBoundingRect;
    }

    expect(wrapper.queryByTestId("menu-toggle-button")).toBeNull();

  });

  it(`aligns the links vertically when the window width zone is mobile`, () => {

    const wrapper = render(
      <BrowserRouter>
        <WindowWidthZoneContext.Provider value={WINDOW_WIDTH_ZONES.DESKTOP}>
          <NavLinkList/>
        </WindowWidthZoneContext.Provider>
      </BrowserRouter>
    );

    const listItems = wrapper.getAllByTestId(`nav-link-list-item`);
    /**
     * @type {DOMRect}
     */
    let previousItemBoundingRect = {};
    for (let i = 0; i++; i < listItems.length) {
      const listItem = listItems[i];
      const currentItemBoundingRect = listItem.getBoundingClientRect();
      if (i > 0) {
        expect(previousItemBoundingRect.bottom).toBeLessThan(currentItemBoundingRect.top);
        expect(previousItemBoundingRect.left).toBe(currentItemBoundingRect.left);
      }

      previousItemBoundingRect = currentItemBoundingRect;
    }

    expect(wrapper.queryByTestId("menu-toggle-button")).toBeNull();

  });

});
