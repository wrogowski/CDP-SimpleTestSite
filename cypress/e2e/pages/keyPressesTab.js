class KeyPressesTab {
  input = () => cy.get("input#target");
  outputMessage = () => cy.get("p#keyPressResult");

  pressTheKey = (button) => this.input().type(`${button}`);

  checkTheOutputMessage = (symbol) => {
    this.outputMessage()
      .invoke("text")
      .then((text) => {
        return text;
      })
      .should("contain", symbol);
  };

  convertTheSymbol = (symbol) => {
    const symbolToCompare = symbol.toLocaleUpperCase().replace(/[{}]/g, "");

    switch (symbolToCompare) {
      case "BACKSPACE":
        return "BACK_SPACE";
      case "DOWNARROW":
        return "DOWN";
      case "`":
        return "BACK_QUOTE";
      case "/":
        return "SLASH";
      case "\\":
        return "BACK_SLASH";
      case "ESC":
        return "ESCAPE";
      case "PAGEUP":
        return "PAGE_UP";
      case "DEL":
        return "DELETE";
      default:
        return symbolToCompare;
    }
  };
}

export default new KeyPressesTab();
