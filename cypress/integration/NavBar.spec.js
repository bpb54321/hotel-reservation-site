import {
  BREAKPOINTS
} from "../../src/context/WindowWidthZoneContext";

context('NavBar', () => {
  beforeEach(() => {
    cy.visit("/")
  });

  context('Desktop window width zone', () => {
    beforeEach(() => {
      cy.viewport(BREAKPOINTS.DESKTOP, 600);
    });

    specify(`The component's top should align with the top of the browser window`, () => {
      cy.get(`[data-testid="navbar"]`)
        .should(($navbar) => {
          const boundingRect = $navbar.get(0).getBoundingClientRect();
          expect(boundingRect.top).to.equal(0);
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
