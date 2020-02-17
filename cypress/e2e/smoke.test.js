describe("Smoke test", () => {
  it("Site loads", () => {
    cy.visit(`/`).assertRoute(`/`)
  })
})
