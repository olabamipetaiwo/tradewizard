import faker from "faker";

describe("Renders SubGenre", () => {
  before(() => {
    cy.visit("/");
  });

  // it.only("It should create a book with title and description", () => {
  //   let bookName = faker.random.word();
  //   let bookDesc = faker.random.word();

  //   cy.getElem("genre-item-1").click();
  //   cy.getElem("move-step-1").click();
  //   cy.getElem("subgenre-item-1").click();
  //   cy.getElem("move-step-2").click();
  //   cy.getElem("book-title").type(bookName);
  //   cy.getElem("book-desc").type(bookDesc);
  //   cy.getElem("add-new-book").click();
  //   cy.contains("Book added successfully");
  // });

  // it.only("It should return  to step 1 after book is created", () => {
  //   cy.getElem("reset-form").click();
  //   cy.contains("Genre 1");
  // });

  it.only("It should create a book with all details", () => {
    let bookName = faker.random.word();
    let bookDesc = faker.random.word();
    let bookIsbn = faker.random.number();
    let bookPages = faker.random.number();

    cy.getElem("genre-item-1").click();
    cy.getElem("move-step-1").click();
    cy.getElem("subgenre-item-1").click();
    cy.getElem("move-step-2").click();
    cy.getElem("book-title").type(bookName);
    cy.getElem("book-isbn").type(bookIsbn);
    cy.getElem("book-author").select("author_A");
    cy.getElem("book_date_published").type("2018-12-16");
    cy.getElem("book-pages").type(bookPages);
    cy.getElem("book-format").select("format_A");
    cy.getElem("book-edition").type("first edition");
    cy.getElem("book-edition-language").select("edition_A");
    cy.getElem("book-desc").type(bookDesc);
    cy.getElem("add-new-book").click();
    cy.contains("Book added successfully");
  });
});
