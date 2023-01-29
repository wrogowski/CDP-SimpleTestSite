class LoggedInPage {
  path = '/basicauth.html';

  pageHeader = () => cy.get('h1#loggedInMessage');
  returnButton = () => cy.get('button#retrun\\ button');

  checkPageHeader = (headerText) => this.pageHeader().should('have.text', headerText);
  clickReturnButton = () => this.returnButton().click();
}

export default new LoggedInPage();