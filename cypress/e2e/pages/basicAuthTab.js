class BasicAuth {
  usernameInput = () => cy.get("input#ba_username");
  passwordInput = () => cy.get("input#ba_password");
  loginButton = () => cy.get("button").contains("Login");
  errorMessage = () => cy.get("p#loginFormMessage");

  loginWithCredentials = (login = "admin", password = "admin") => {
    if (login) this.usernameInput().clear().type(login);
    if (password) this.passwordInput().clear().type(password);
    this.loginButton().click();
  };

  getErrorMessage = (errorText) => this.errorMessage().should("have.text", errorText);
}

export default new BasicAuth();
