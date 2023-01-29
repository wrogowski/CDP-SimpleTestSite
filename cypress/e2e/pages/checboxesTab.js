class CheckboxesTab {
  checkboxesForm = () => cy.get('form#checkboxes');
  checkbox = () => cy.get('input[type="checkbox"]');
}

export default new CheckboxesTab();
