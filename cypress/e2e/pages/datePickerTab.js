class DatePickerTab {
  dateInput = () => cy.get('input[type="Date"]');
  dateInputError = () => cy.get('input[type="Date"]:invalid');

  provideDate = (date) => this.dateInput().clear().type(date);
}

export default new DatePickerTab();