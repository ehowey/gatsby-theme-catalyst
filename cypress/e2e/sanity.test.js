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
    cy.get("nav").contains("Left Link").should("be.visible")
    cy.get("nav").contains("Posts").should("be.visible")
    cy.get("nav").contains("Projects").should("be.visible")
    cy.viewport(375, 812)
    cy.wait(500)
    cy.get("nav").should("not.be.visible")
    cy.get('button[aria-label*="Toggle Menu"]').should("be.visible").click()
    cy.get("nav").find("a").should("be.visible")
    cy.get('button[aria-label*="Toggle Menu"]').click()
  })
})

describe("Color Mode Toggle Test", () => {
  it("Color mode toggle test", () => {
    cy.viewport(1440, 900)
    cy.scrollTo("top")
    cy.wait(1500)
    cy.get("nav").then(($nav) => {
      if ($nav.find('button[aria-label*="Change to dark mode"]').length) {
        cy.get('button[aria-label*="Change to dark mode"]').click()
        cy.wait(500)
        cy.get("body").should("have.css", "background-color", "rgb(26, 32, 44)")
        cy.get('button[aria-label*="Change to light mode"]').click()
        cy.wait(500)
        cy.get("body").should(
          "have.css",
          "background-color",
          "rgb(247, 250, 252)"
        )
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
    cy.get("nav button").contains("Projects").click()
    cy.wait(200)
    cy.get('a[href*="attack"]').click()
    cy.wait(500)
    cy.get("h1").contains("Attack Ant Hill").should("be.visible")
  })
})
