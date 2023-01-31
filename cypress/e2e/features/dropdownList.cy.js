import {
  selectDropdownOption,
  getSelectedOption,
} from "../pages/dropdownListTab";

describe("Dropdown list", () => {
  it("selects option1 by its text", () => {
    selectDropdownOption("Option 1");
    getSelectedOption().should("have.value", 1);
  });

  it("selects option2 by its value", () => {
    selectDropdownOption("2");
    getSelectedOption().should("have.text", "Option 2");
  });

  it("selects option1 by its index", () => {
    selectDropdownOption(1);
    getSelectedOption().should("have.text", "Option 1");
  });

  it("first option should be disabled", () => {
    getSelectedOption()
      .should("have.text", "Please select an option")
      .and("have.attr", "disabled");
  });
});
