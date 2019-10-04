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

/**
 * @typedef {Object} SpaceSpecification - a object that specifies the space of an element inside of another element
 * @prop {number} [top]
 * @prop {number} [right]
 * @prop {number} [bottom]
 * @prop {number} [left]
 */

/**
 * Asserts that innerElement is inside outerElement, with a certain amount of space between the two elements.
 * @param innerElement {HTMLElement} A single element which is inside outerElement.
 * @param outerElement {HTMLElement} A single element which contains innerElement.
 * @param space {SpaceSpecification} The space that should be between innerElement and outerElement.
 */
export function elementInsideElement(innerElement, outerElement, space) {
  const innerElementBoundingRect = innerElement.getBoundingClientRect();
  const outerElementBoundingRect = outerElement.getBoundingClientRect();

  for (const side in space) {
    let differenceBetweenSides;
    switch (side) {
      case "right":
      case "bottom":
        differenceBetweenSides = outerElementBoundingRect[side] - innerElementBoundingRect[side];
        break;
      default:
        differenceBetweenSides = innerElementBoundingRect[side] - outerElementBoundingRect[side];
    }
    expect(differenceBetweenSides)
      .to.be.closeTo(space[side], 1, `Expected the space between the ` +
      `${side} of the inner element and the ${side} of the outer element to be about equal to ${space[side]}`);
  }

}
