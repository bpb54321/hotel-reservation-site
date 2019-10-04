import {
  BREAKPOINTS
} from "../../src/context/WindowWidthZoneContext";

import {elementInsideElement} from "../utility/layout-assertions";

context('NavBar', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.get(`[data-testid="navbar"]`).as(`navbar`);
  });

  context('Desktop window width zone', () => {
    beforeEach(() => {
      cy.viewport(BREAKPOINTS.DESKTOP, 600);
    });

    specify(`The component's top should align with the top of the browser window`, () => {
      cy.get(`@navbar`)
        .should(($navbar) => {
          const boundingRect = $navbar.get(0).getBoundingClientRect();
          expect(boundingRect.top).to.equal(0);
        });
    });

    specify(`There should be some space between the logo and the left edge of the window and ` +
      `the logo and the top edge of the window`, () => {
      cy.get(`@navbar`)
        .should(($navbar) => {
          const space = {
            top: 10,
            left: 10,
          };
          elementInsideElement($navbar.get(0), document.documentElement, space);
        });
    });
  });

  context('Mobile window width zone', () => {
  });

  context('Transition between width zones', () => {

  });

  context('All width zones', () => {

  });

});
