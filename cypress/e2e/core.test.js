describe("Smoke Test", () => {
  it("Site loads", () => {
    cy.visit(`/`).assertRoute(`/`)
    cy.viewport(1440, 900)
    cy.get("header").should("be.visible")
    cy.get("main").should("be.visible")
    cy.get("footer").should("be.visible")
  })
})

describe("Markdown test", () => {
  it("Renders h1", () => {
    cy.get("h1").contains("Gatsby Starter Catalyst Core")
  })
  it("Renders link", () => {
    cy.get("main").within(() => {
      cy.get("a").should("have.css", "color", "rgb(43, 108, 176)")
    })
  })
  it("Renders ol", () => {
    cy.get("main").within(() => {
      cy.get("ol").contains("li", "Bird")
    })
  })
  it("Renders ul", () => {
    cy.get("main").within(() => {
      cy.get("ul").contains("li", "Red")
    })
  })
  it("Renders image", () => {
    cy.get("main")
      .find("img")
      .should("have.attr", "src")
      .should("include", "image1")
  })
})
