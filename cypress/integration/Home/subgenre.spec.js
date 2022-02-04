import faker from "faker";
import { capitalizeFirstWord } from "../../support/utils";

describe("Renders SubGenre", () => {
  before(() => {
    cy.visit("/");
  });

  it.only("It should move to step 1 if i click the back button on step 2", () => {
    cy.getElem("genre-item-1").click();
    cy.getElem("move-step-1").click();
    cy.getElem("move-back-2").click();
    cy.contains("Genre 1");
  });

  it.only("It should create a new subgenre with only name", () => {
    let randomWord = faker.random.word();
    cy.getElem("genre-item-1").click();
    cy.getElem("move-step-1").click();
    cy.getElem("add-new-subgenre").click();
    cy.get("#new-subgenre").type(randomWord);
    cy.getElem("save-new-subgenre").click();
    cy.contains(capitalizeFirstWord(randomWord));
  });

  it.only("It should create a new subgnre with  name and isDescriotion", () => {
    let randomWord = faker.random.word();
    cy.getElem("add-new-subgenre").click();
    cy.get("#new-subgenre").type(randomWord);
    cy.get("#isDescriptionRequired").check();
    cy.getElem("save-new-subgenre").click();
    cy.contains(capitalizeFirstWord(randomWord));
  });
});
