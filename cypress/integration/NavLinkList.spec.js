context('NavLinkList', () => {
  beforeEach(() => {
    cy.visit("/")
  });

  it('aligns the links horizontally when the window width zone is desktop', () => {

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

});
