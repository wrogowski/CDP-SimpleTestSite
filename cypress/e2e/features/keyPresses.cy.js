import {
  pressTheKey,
  convertTheSymbol,
  outputMessage,
} from "../pages/keyPressesTab";

describe("Key presses", () => {
  it("returns the name of the pressed key in the output message", () => {
    const inputSymbols =
      "0 a {alt} {enter} {backspace} {esc} {control} {shift} ` / \\ {downarrow} {end} {pageUp} {del}"
      .split(" ");

    inputSymbols.forEach((symbol) => {
      pressTheKey(symbol);
      outputMessage().should(
        "have.text",
        `You entered: ${convertTheSymbol(symbol)}`
      );
    });
  });
});
