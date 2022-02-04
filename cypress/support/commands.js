// import "@testing-library/cypress/add-commands";

Cypress.Commands.add("getElem", (input) => {
  cy.get(`[data-cy=${input}]`);
});

Cypress.Commands.add("capitalizeFirstWord", (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
});
