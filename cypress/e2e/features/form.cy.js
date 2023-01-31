import formTab from "../pages/formTab";

describe("Form", () => {
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
    { input: "firstName", firstName: "", lastName: "1" },
    { input: "lastName", firstName: "a", lastName: "" },
  ].forEach((run) => {
    it(`Does not allow to submit empty ${run.input} field`, () => {
      formTab.submitFormData(run.firstName, run.lastName);
      formTab.getInvalidInput(run.input).should('be.visible');
    });
  });
});
