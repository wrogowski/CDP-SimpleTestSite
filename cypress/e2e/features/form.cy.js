import formTab from "../pages/formTab";

describe("test form inputs", () => {
  beforeEach("unroll the tab with the controls", () => {
    cy.openElementsTab("Form");
  });

  [
    { firstName: "a", lastName: "1" },
    { firstName: " ", lastName: " " },
    { firstName: ".", lastName: "~" },
    { firstName: "ąźłó", lastName: "🛴😏" },
  ].forEach((run) => {
    it("Form accepts any non-empty value", () => {
      formTab.submitFormData(run.firstName, run.lastName);
      cy.on("window:alert", (alert) => {
        expect(alert).to.include("success");
      });
    });
  });

  [
    { it: "firstName", firstName: "", lastName: "1" },
    { it: "lastName", firstName: "a", lastName: "" },
  ].forEach((run) => {
    it(`Does not allow to submit empty ${run.it} field`, () => {
      formTab.submitFormData(run.firstName, run.lastName);
      formTab.invalidInput().should("exist");
    });
  });
});
