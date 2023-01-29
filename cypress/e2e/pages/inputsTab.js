class InputsPage {
  input = () =>   cy.get('input[type="number"]');

  typeIntoField = (value) => this.input().clear().type(value);

  checkInputVale = (expectedValue) =>
    this.input().should("have.value", expectedValue);
}

export default new InputsPage();
