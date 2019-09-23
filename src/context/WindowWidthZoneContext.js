import React from "react";

export const WINDOW_WIDTH_ZONES = {
  MOBILE: "mobile",
  DESKTOP: "desktop",
};

export const BREAKPOINTS = {
  MOBILE: 0,
  DESKTOP: 768,
};

export const WindowWidthZoneContext = React.createContext(WINDOW_WIDTH_ZONES.DESKTOP);

/**
 * Determines the screen width zone based on the current width of the document.
 * @return {string}
 */
export function getScreenWidthZone() {
  if (document.documentElement.clientWidth >= BREAKPOINTS.DESKTOP) {
    return WINDOW_WIDTH_ZONES.DESKTOP;
  } else {
    return WINDOW_WIDTH_ZONES.MOBILE;
  }
}
