/// <reference types="Cypress" />

describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("h1", /witaj w sklepie internetowym/i);
    cy.contains("a", /przejdź do koszyka/i).click();
    cy.contains(/brak produktów w koszyku/i);
    cy.contains(/go back/i).click();
  });
});
