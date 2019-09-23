import {BREAKPOINTS} from "../../src/context/WindowWidthZoneContext";

context('NavLinkList', () => {
  beforeEach(() => {
    cy.visit("/")
  });

  it('aligns the links horizontally when the window width zone is desktop', () => {
    cy.viewport(BREAKPOINTS.DESKTOP, 600);

    cy.get(`[data-testid="nav-link-list-item`)
      .then(($listItems) => {

        // Initialize with a dummy value to get intelligent type completion
        let previousItemBoundingRect = new DOMRect(0, 0, 0, 0);

        for (let i = 0; i < $listItems.length; i++) {
          const listItem = $listItems[i];
          const currentItemBoundingRect = listItem.getBoundingClientRect();
          if (i > 0) {
            expect(currentItemBoundingRect.left - previousItemBoundingRect.right).to.be.closeTo(0, 1);
            expect(currentItemBoundingRect.top - previousItemBoundingRect.top).to.be.closeTo(0, 1);
            expect(currentItemBoundingRect.bottom - previousItemBoundingRect.bottom).to.be.closeTo(0, 1);
          }

          previousItemBoundingRect = currentItemBoundingRect;
        }

      });

  });

  it(`aligns the links vertically when the window width zone is mobile`, () => {
    cy.viewport(BREAKPOINTS.DESKTOP - 1, 600);

    cy.get(`[data-testid="nav-link-list-item`)
      .should(($listItems) => {

        // Initialize with a dummy value to get intelligent type completion
        let previousItemBoundingRect = new DOMRect(0, 0, 0, 0);

        for (let i = 0; i < $listItems.length; i++) {
          const listItem = $listItems[i];
          const currentItemBoundingRect = listItem.getBoundingClientRect();
          if (i > 0) {
            // Later list items will be visually lower on the screen
            expect(currentItemBoundingRect.top - previousItemBoundingRect.bottom)
              .to.be.closeTo(0, 1, `Expected $listItems[${i}].top to be at the same spot as ` +
              `$listItems[${i - 1}].bottom`);
            expect(currentItemBoundingRect.left - previousItemBoundingRect.left)
              .to.be.closeTo(0, 1, `Expected $listItems[${i}].left to be aligned with ` +
              `$listItems[${i - 1}].left`);
          }

          previousItemBoundingRect = currentItemBoundingRect;
        }

      });
  });

});
