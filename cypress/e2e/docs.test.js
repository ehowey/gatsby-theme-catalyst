describe("Smoke test", () => {
  it("Site loads", () => {
    cy.visit(`/`).assertRoute(`/`)
    cy.get("header").should("be.visible")
    cy.get("main").should("be.visible")
    cy.get("footer").should("be.visible")
  })
})
describe("Check Docs", () => {
  it("Docs works", () => {
    cy.get("nav").within(() => {
      cy.get('a[href*="/docs"]').click()
    })
    cy.get("h1").contains("Docs")
    cy.get("main").within(() => {
      cy.get("a").should("have.css", "color", "rgb(197, 48, 48)")
    })
  })
})
