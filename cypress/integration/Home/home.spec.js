describe("Renders App", () => {
  before(() => {
    cy.visit("/");
  });

  it.only("If I open homepage, App should render", () => {
    cy.contains("TradeCore Wizard");
  });

  it.only("Success modal should not show on default", () => {
    cy.contains("Book added successfully").should("not.exist");
  });
});
