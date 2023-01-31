class FormTab {
  firstNameInput = (psedoClassAddon = '') => cy.get("input#fname" + psedoClassAddon);
  lastNameInput = (psedoClassAddon = '') => cy.get("input#lname" + psedoClassAddon);
  submitButton = () => cy.get("input#formSubmitButton");

  submitFormData = (firstName, lastName) => {
    if (firstName) this.firstNameInput().clear().type(firstName);
    if (lastName) this.lastNameInput().clear().type(lastName);
    this.submitButton().click();
  };

  getInvalidInput = (fieldName) => {
    return this[`${fieldName}Input`](':invalid');
  };
}

export default new FormTab();
