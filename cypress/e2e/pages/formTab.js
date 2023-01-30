class FormTab {
  firstNameInput = () => cy.get("input#fname");
  lastNameInput = () => cy.get("input#lname");
  submitButton = () => cy.get("input#formSubmitButton");
  invalidInput = () => cy.get('input:invalid');
  

  submitFormData = (firstName, lastName) => {
    if (firstName) this.firstNameInput().clear().type(firstName);
    if (lastName) this.lastNameInput().clear().type(lastName);
    this.submitButton().click();
  };
}

export default new FormTab();