/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("example", () => {
  it("check login page", () => {
    cy.visit("http://localhost:5173/");
    cy.get("#root > div > header > div:nth-child(3) > a")
      .should("have.text", "LOGIN")
      .click();

    cy.url().should("include", "login");
    cy.get("#username").type("cos1715");
    cy.get("#root > div > main > div > form > button").click();
  });
});
