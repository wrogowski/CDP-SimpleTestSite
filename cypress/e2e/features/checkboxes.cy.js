import HomePage from "../pages/homePage";
import checboxesTab from "../pages/checboxesTab";

describe("test checking and unchecking the checkbox controls", () => {
  beforeEach("unroll the tab with the controls", () => {
    HomePage.openElementsTab("Checkboxes");
  });

  it("correctly changes the current state of the checkbox", () => {
    checboxesTab.checkboxesForm().within(() => {
      checboxesTab.checkbox().first().check().should("be.checked");
      checboxesTab.checkbox().last().uncheck().should("not.be.checked");
    });
  });
});
