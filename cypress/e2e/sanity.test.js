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
    cy.get("header").then(($header) => {
      if ($header.find("nav").length) {
        cy.get("nav").should("be.visible")
        cy.viewport(375, 812)
        cy.wait(500)
        cy.get("nav").should("not.be.visible")
        cy.get('button[aria-label*="Toggle Menu"]').should("be.visible").click()
        cy.get("nav").find("a").should("be.visible")
        cy.get('button[aria-label*="Toggle Menu"]').click()
        cy.get("nav").contains("Left Link")
        cy.get("nav").contains("Posts")
        cy.get("nav").contains("Projects")
      } else {
        return "No Nav"
      }
    })
  })
})

describe("Color Mode Toggle Test", () => {
  it("Toggle works", () => {
    cy.viewport(1440, 900)
    cy.scrollTo("top")
    cy.wait(1000)
    cy.get("header").then(($nav) => {
      if ($nav.find('button[aria-label*="Change to dark mode"]').length) {
        cy.get('button[aria-label*="Change to dark mode"]').click()
        cy.get("body").should("have.css", "background-color", "rgb(26, 32, 44)")
        cy.get('button[aria-label*="Change to light mode"]').click()
        cy.get("body").should(
          "have.css",
          "background-color",
          "rgb(247, 250, 252)"
        )
      } else {
        return "No color mode toggle"
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
      } else {
        return "No color mode toggle"
      }
    })
  })
})

describe("Blog post test", () => {
  it("Check blog posts", () => {
    cy.viewport(1440, 900)
    cy.wait(500)
    cy.get('a[href*="posts"]').click()
    cy.wait(500)
    cy.get("body").contains("Hello Jupiter")
    cy.get('a[href*="hello-jupiter"]').click()
    cy.wait(500)
    cy.get("h1").contains("Hello Jupiter")
    cy.get("[data-main-image]")
      .should("have.attr", "src")
      .should("include", "cdn.sanity.io")
  })
})

describe("Dropdown and page test", () => {
  it("Check blog posts", () => {
    cy.viewport(1440, 900)
    cy.wait(500)
    cy.get('button[class*="DropDown"]').click()
    cy.wait(200)
    cy.get('a[href*="attack"]').click()
    cy.wait(500)
    cy.get("h1").contains("Attack Ant Hill")
  })
})
