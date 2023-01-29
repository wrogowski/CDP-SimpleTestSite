import { loginWithCredentials, getErrorMessage } from "../pages/basicAuthTab";
import loggedInPage from "../pages/loggedInPage";
import LoggedInPage from "../pages/loggedInPage";

describe("test basic authentication feature", () => {
  beforeEach("unroll the tab with the controls", () => {
    cy.openElementsTab("Basic auth");
  });

  it("Login confirmation is disaplyed on a new page after providing correct credentials", () => {
    loginWithCredentials();
    cy.location("pathname").should("eq", LoggedInPage.path);
    LoggedInPage.checkPageHeader("You are logged in!");
  });

  it("Return button moves back to the main page", () => {
    loginWithCredentials();
    loggedInPage.clickReturnButton();
    cy.url().should("eq", Cypress.config("baseUrl") + "index.html");
  });

  [
    { it: "empty username", login: "", password: "admin" },
    { it: "empty password", login: "admin", password: "" },
    { it: "empty credentials", login: "", password: "" },
    { it: "incorrect username", login: "admin ", password: "admin" },
    { it: "incorrect password", login: "admin", password: "admin " },
  ].forEach((run) => {
    it("it is impossible to login with" + run.it, () => {
      loginWithCredentials(run.login, run.password);
      getErrorMessage("Invalid credentials");
    });
  });
});
