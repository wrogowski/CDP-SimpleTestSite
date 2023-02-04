import {
  addButtons,
  deleteButton,
  createdButtons,
} from "../pages/addRemoveElementsTab";

describe("Add/remove elements", () => {
  it("creates buttons specified amount of times", () => {
    const buttonsAmount = Math.ceil(Math.random() * 10);

    addButtons(buttonsAmount);
    createdButtons().should("have.length", buttonsAmount);
  });

  it('requires a separate click to remove each button', () => {
    addButtons(5);
    for(let i = 0; i < 3; i++) deleteButton();
    createdButtons().should("have.length", 2);

    for(let i = 0; i < 2; i++) deleteButton();
    createdButtons().should('not.exist');
  });
});
