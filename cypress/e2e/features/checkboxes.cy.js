import checboxesTab from "../pages/checboxesTab";

describe("Checkboxes", () => {
  it("correctly changes the current state of the checkbox", () => {
    checboxesTab.checkboxesForm().within(() => {
      checboxesTab.checkbox().first().check().should("be.checked");
      checboxesTab.checkbox().last().uncheck().should("not.be.checked");
    });
  });
});
