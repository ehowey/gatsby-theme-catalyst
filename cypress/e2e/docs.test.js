describe("Smoke test", () => {
  it("Site loads", () => {
    cy.visit(`/`).assertRoute(`/`)
    cy.get("header").should("be.visible")
    cy.get("main").should("be.visible")
    cy.get("footer").should("be.visible")
  })
})
describe("Check Docs", () => {
  it("Docs work", () => {
    cy.get("nav").within(() => {
      cy.get('a[href*="/docs"]').click()
    })
  })
})
describe("Check Link Color", () => {
  it("Link Color Correct", () => {
    cy.visit(`/docs/`)
    cy.get("main").within(() => {
      cy.get("a").should("have.css", "color", "rgb(197, 48, 48)")
    })
  })
})
