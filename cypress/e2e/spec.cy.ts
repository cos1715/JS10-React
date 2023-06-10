describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
  it("Does not do much!", () => {
    expect(true).not.equal(false);
  });
});

describe("My First Test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("https://example.cypress.io");
  });
});
