import InputsTab from "../pages/inputsTab";
const { typeIntoField, checkInputVale } = InputsTab;

describe("Check numeric input field", () => {
  beforeEach("unroll the tab with the controls", () => {
    cy.openElementsTab("Inputs");
  });

  it("positive, negative numbers and exponent notation are allowed in the field", () => {
    [123, 0, -321, "1e-10", "-5e20", -0, 5.789, -5.7987].forEach((number) => {
      typeIntoField(number);
      checkInputVale(number);
    });
  });

  it("Charater other than necessary to provide numbers are forbidden", () => {
    typeIntoField("A ą 0 !@#$%^& _=\n\r1/()/--a");
    checkInputVale("01");
  });

  it("natural number may be increased/decreased by pressing arrow keys", () => {
    [123, 0, -321, 1e10, -5e5, -0].forEach((number) => {
      typeIntoField(`${number}{upArrow}{upArrow}{downArrow}`);
      checkInputVale(number + 1);
    });
  });
});
