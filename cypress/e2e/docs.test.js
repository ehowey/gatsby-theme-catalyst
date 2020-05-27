describe("Smoke test", () => {
  it("Site loads", () => {
    cy.visit(`http://localhost:9000/`).assertRoute(`http://localhost:9000/`)
    cy.get("header").should("be.visible")
    cy.get("main").should("be.visible")
    cy.get("footer").should("be.visible")
  })
})
