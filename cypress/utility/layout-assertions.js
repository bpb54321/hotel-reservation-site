/**
 *
 * @param $elements {JQuery} A jQuery collection of elements.
 */
export function assertThatElementsAreHorizontallyAligned($elements) {
  // Initialize with a dummy value to get intelligent type completion
  let previousItemBoundingRect = new DOMRect(0, 0, 0, 0);

  for (let i = 0; i < $elements.length; i++) {
    const listItem = $elements[i];
    const currentItemBoundingRect = listItem.getBoundingClientRect();
    if (i > 0) {
      expect(currentItemBoundingRect.left - previousItemBoundingRect.right).to.be.closeTo(0, 1);
      expect(currentItemBoundingRect.top - previousItemBoundingRect.top).to.be.closeTo(0, 1);
      expect(currentItemBoundingRect.bottom - previousItemBoundingRect.bottom).to.be.closeTo(0, 1);
    }

    previousItemBoundingRect = currentItemBoundingRect;
  }
}

/**
 *
 * @param $elements {JQuery} A jQuery collection of elements.
 */
export function assertThatElementsAreVerticallyAligned($elements) {
  // Initialize with a dummy value to get intelligent type completion
  let previousItemBoundingRect = new DOMRect(0, 0, 0, 0);

  for (let i = 0; i < $elements.length; i++) {
    const listItem = $elements[i];
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
}
