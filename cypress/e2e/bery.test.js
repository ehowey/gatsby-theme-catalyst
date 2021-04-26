describe("Smoke Test", () => {
  it("Site loads", () => {
    cy.visit(`/`).assertRoute(`/`)
    cy.viewport(1440, 900)
    cy.get("header").should("be.visible")
    cy.get("main").should("be.visible")
    cy.get("footer").should("be.visible")
  })
})

describe("Navigation Menu Test", () => {
  it("Navigation Works", () => {
    cy.viewport(1440, 900)
    cy.wait(500)
    cy.get("nav").should("be.visible")
    cy.get("nav").contains("Blog")
    cy.get("nav").contains("About")
    cy.get("nav").contains("Contact")
    cy.viewport(375, 812)
    cy.wait(500)
    cy.get("nav").should("not.be.visible")
    cy.get('button[aria-label*="Toggle Menu"]').should("be.visible").click()
    cy.get("nav").find("a").should("be.visible")
    cy.get('button[aria-label*="Toggle Menu"]').click()
  })
})

describe("Color Mode Toggle Test", () => {
  it("Toggle works", () => {
    cy.viewport(1440, 900)
    cy.scrollTo("top")
    cy.wait(1500)
    cy.get("nav").then(($nav) => {
      if ($nav.find('button[aria-label*="Change to dark mode"]').length) {
        cy.get('button[aria-label*="Change to dark mode"]').click()
        cy.get("body").should("have.css", "background-color", "rgb(26, 32, 44)")
        cy.get('button[aria-label*="Change to light mode"]').click()
        cy.get("body").should(
          "have.css",
          "background-color",
          "rgb(247, 250, 252)"
        )
      }
      if ($nav.find('button[aria-label*="Change to light mode"]').length) {
        cy.get('button[aria-label*="Change to light mode"]').click()
        cy.get("body").should(
          "have.css",
          "background-color",
          "rgb(247, 250, 252)"
        )
        cy.get('button[aria-label*="Change to dark mode"]').click()
        cy.get("body").should("have.css", "background-color", "rgb(26, 32, 44)")
      }
    })
  })
})

describe("Pages and blog", () => {
  it("Check pages and blog", () => {
    cy.viewport(1440, 900)
    cy.wait(500)
    cy.get('nav a[href*="about"]').click()
    cy.wait(500)
    cy.get("h1").contains("About")
    cy.get("nav a").contains("Blog").click()
    cy.wait(500)
    cy.get("body").contains("How to win a water fight")
    cy.get('a[href*="how-to-win-a-water-fight"] h2').click()
    cy.wait(500)
    cy.get("h1").contains("How to win a water fight").should("be.visible")
    cy.get("[data-main-image]")
      .should("have.attr", "src")
      .should("include", "cdn.sanity.io")
    cy.get("main").contains("3 Min Read").should("be.visible")
    cy.get("main").contains("July 27, 2020").should("be.visible")
  })
})
