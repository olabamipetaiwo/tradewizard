// import faker from "faker";

describe("Renders SubGenre", () => {
  before(() => {
    cy.visit("/");
  });

  it.only("It should create a book with title and description", () => {
    let bookName = "georgee";
    let bookDesc = "animal farm";

    cy.getElem("genre-item-1").click();
    cy.getElem("move-step-1").click();
    cy.getElem("subgenre-item-1").click();
    cy.getElem("move-step-2").click();
    cy.getElem("book-title").type(bookName);
    cy.getElem("book-desc").type(bookDesc);
    cy.getElem("add-new-book").click();
    cy.contains("Book added successfully");
  });

  it.only("It should return  to step 1 after book is created", () => {
    cy.getElem("reset-form").click();
    cy.contains("Genre 1");
  });
});
