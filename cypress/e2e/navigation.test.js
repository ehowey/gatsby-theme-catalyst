describe("Navigation Menu Tests", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(1000)
  })

  it("Navigation Works", () => {
    cy.get("header").then($header => {
      if ($header.find("nav").length) {
        cy.get("nav").should("be.visible")
        cy.viewport(375, 812)
        cy.get("nav").should("not.be.visible")
        cy.get('button[aria-label*="Toggle Menu"]')
          .should("be.visible")
          .click()
        cy.get("nav")
          .find("a")
          .should("be.visible")
      } else {
        return "No Nav"
      }
    })
  })
})
