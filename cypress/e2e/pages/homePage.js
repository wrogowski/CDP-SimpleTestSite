class HomePage {
  url = "https://simpletestsite.fabrykatestow.pl/";
  
  elementTabName = () => cy.get("div[id$='-header']");
  tabHeader = (text) => cy.get('h2').contains(`Test ${text} below:`);

  openElementsTab(name) {
    this.elementTabName().contains(name).click();
    this.tabHeader(name.toLowerCase()).should('be.visible');
  }

  visit() {
    cy.visit(this.url);
  }
}

export default new HomePage();
