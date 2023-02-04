import { dragAndDrop, allElements } from "../pages/dragAndDropTab";

describe("Drag and drop", () => {
  it("should switch elements place", () => {
    dragAndDrop("elementA", "elementB");
    allElements().first().should("have.text", "B");

    dragAndDrop("elementB", "elementA");
    allElements().last().should("have.text", "B");
  });

  it('does not change position when dropped in the same place', () => {
    dragAndDrop("elementA", "elementA");
    allElements().first().should("have.text", "A");

    dragAndDrop("elementB", "elementB");
    allElements().last().should("have.text", "B");
  });

});
