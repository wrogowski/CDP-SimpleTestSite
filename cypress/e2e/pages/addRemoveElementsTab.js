class AddRemoveElementsTab {
  addElementButton = () => cy.get('button[onclick="addElement()"]');
  firstDeleteButton = () => cy.get('button.added-manually').first();
  createdButtons = () => cy.get("div#elements").find("button.added-manually");


  addButtons = (amount) => {
    for (let i = 0; i < amount; i++) {
      this.addElementButton().click();
    }
  };

  deleteButton = () => this.firstDeleteButton().click();
}

export default new AddRemoveElementsTab();
