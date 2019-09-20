import React from "react";

export const windowWidthZones = {
  "MOBILE": "mobile",
  "DESKTOP": "desktop",
};

export const WindowWidthZoneContext = React.createContext(windowWidthZones.DESKTOP);

/**
 * Determines the screen width zone based on the current width of the document.
 * @return {string}
 */
export function getScreenWidthZone() {
  if (document.documentElement.clientWidth >= 768) {
    return windowWidthZones.DESKTOP;
  } else {
    return windowWidthZones.MOBILE;
  }
}
