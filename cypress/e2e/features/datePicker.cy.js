import datePickerTab from "../pages/datePickerTab";
const { provideDate, dateInputError } = datePickerTab;

describe("Date picker", () => {
  it("allows to select a date from '2020", () => {
    ["2020-01-01", "2020-12-31"].forEach((date) => {
      provideDate(date);
      dateInputError().should("not.exist");
    });
  });

  it("only dates from '2020 are allowed", () => {
    ["2021-01-01", "2019-12-31"].forEach((date) => {
      provideDate(date);
      dateInputError().should("exist");
    });
  });
});
