describe("Renders Gnere", () => {
  before(() => {
    cy.visit("/");
  });

  it("If I open homepage, App should render a list of genres", () => {
    cy.contains("Genre 1");
  });

  it("Render five genres by default", () => {
    cy.get("[data-cy=genre-list").should("have.length", 1);
    cy.get(".genre-list button").then(($lis) => {
      expect($lis, "5 items").to.have.length(5);
      expect($lis.eq(0), "first item").to.contain("Genre 1");
      expect($lis.eq(4), "Last item").to.contain("Genre 5");
    });
  });

  it("It should fail move to step 2 if i  don't select genre and click next", () => {
    cy.get("[data-cy=move-step-1]").click();
    cy.contains("You must select a book genre before you proceed");
  });

  it("It should move to step 2 if i select genre and click next", () => {
    cy.get("[data-cy=genre-item-1]").click();
    cy.get("[data-cy=move-step-1]").click();
  });
});
