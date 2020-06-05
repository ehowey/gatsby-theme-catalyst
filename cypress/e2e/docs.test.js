describe("Smoke test", () => {
  it("Site loads", () => {
    cy.visit(`/`).assertRoute(`/`)
    cy.get("header").should("be.visible")
    cy.get("main").should("be.visible")
    cy.get("footer").should("be.visible")
  })
})
describe("Check Color Regression", () => {
  it("Colors good", () => {
    cy.wait(1000)
    cy.get("nav").within(() => {
      cy.get('a[href*="/docs"]').click()
    })
    cy.wait(2000)
    cy.get("h1").contains("Docs")
    cy.get("main").within(() => {
      cy.get("a").should("have.css", "color", "rgb(197, 48, 48)")
    })
    cy.get("nav").within(() => {
      cy.get('button[aria-label*="Toggle dark mode"]').click()
    })
    cy.wait(500)
    cy.get("main").within(() => {
      cy.get("a").should("have.css", "color", "rgb(245, 101, 101)")
    })
  })
})
