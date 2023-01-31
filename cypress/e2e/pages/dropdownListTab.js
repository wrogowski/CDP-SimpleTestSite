class DropdownListTab {
  dropdown = () => cy.get("select#dropdown");
  dropdownOptions = (value = '') => cy.get('select option' + value);
  selectedOption = () => cy.get('select#dropdown option:selected');

  selectDropdownOption = (selector) => this.dropdown().select(selector);
  getSelectedOption = () => this.selectedOption();
}

export default new DropdownListTab();
