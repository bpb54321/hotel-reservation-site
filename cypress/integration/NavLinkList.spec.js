import {
  BREAKPOINTS
} from "../../src/context/WindowWidthZoneContext";
import {
  assertThatElementsAreVerticallyAligned,
  assertThatElementsAreHorizontallyAligned,
} from "../utility/layout-assertions";


context('NavLinkList', () => {
  beforeEach(() => {
    cy.visit("/")
  });

  context('Desktop window width zone', () => {
    it('aligns the links horizontally', () => {
      cy.viewport(BREAKPOINTS.DESKTOP, 600);

      cy.get(`[data-testid="nav-link-list-item`)
        .should(($listItems) => {
          assertThatElementsAreHorizontallyAligned($listItems);
        });

    });
  });

  context('Mobile window width zone', () => {
    it(`aligns the links vertically when the window width zone is mobile`, () => {
      cy.viewport(BREAKPOINTS.DESKTOP - 1, 600);

      cy.get(`[data-testid="nav-link-list-item`)
        .should(($listItems) => {
          assertThatElementsAreVerticallyAligned($listItems);
        });
    });
  });

  context('Transition between width zones', () => {
    it(`changes the list item layout from horizontal to vertical when transitioning from desktop to mobile`, () => {
      cy.viewport(BREAKPOINTS.DESKTOP + 10, 600);

      cy.get(`[data-testid="nav-link-list-item`)
        .as(`nav-link-list-items`)
        .should(($listItems) => {
          assertThatElementsAreHorizontallyAligned($listItems);
        });

      cy.viewport(BREAKPOINTS.DESKTOP - 10, 600);

      cy.get(`@nav-link-list-items`)
        .should(($listItems) => {
          assertThatElementsAreVerticallyAligned($listItems);
        });
    });
  });

});
