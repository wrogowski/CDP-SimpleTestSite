class DragAndDrop {
  elementA = () => cy.get("div#column-a");
  elementB = () => cy.get("div#column-b");
  allElements = () => cy.get('div#columns').children();
  
  dragAndDrop = (elementToDrag, dropLocation) => {
    const dataTransfer = new DataTransfer();
    this[elementToDrag]().trigger("dragstart", { dataTransfer });
    this[dropLocation]().trigger("drop", { dataTransfer });    
  };

  // dragAndDrop = (elementToDrag, dropLocation) => {
  //   cy.get("div#column-a").then(($el) => {
  //     $el[0].addEventListener("mousedown", (event) => {
  //       console.log("Mousedown position:", event.clientX, event.clientY);
  //     });
  //   });

  //   cy.get("div#column-a").trigger("mousedown", { which: 1 });

  //   cy.get("div#column-a").then(($el) => {
  //     $el[0].addEventListener("mousemove", (event) => {
  //       console.log("Mouseup position:", event.clientX, event.clientY);
  //     });
  //   });

  //   cy.get("div#column-a")
  //     .trigger("mousemove", { clientX: 150, clientY: 350 })
  //     .trigger("mouseup");
  // };
}

export default new DragAndDrop();
