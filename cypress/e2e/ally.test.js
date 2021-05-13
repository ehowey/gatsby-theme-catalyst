describe("Check light theme for a11Y", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.viewport(1440, 900)
    cy.scrollTo("top")
    cy.wait(1500)
    cy.get("header").then(($nav) => {
      if ($nav.find('button[aria-label*="Change to light mode"]').length) {
        return cy.get('button[aria-label*="Change to light mode"]').click()
      } else {
        return "No light mode"
      }
    })
    cy.injectAxe()
  })
  it("Has no detectable a11y violations on light theme", () => {
    cy.checkA11y()
  })
})

describe("Check dark theme for a11y", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.viewport(1440, 900)
    cy.scrollTo("top")
    cy.wait(1500)
    cy.get("header").then(($nav) => {
      if ($nav.find('button[aria-label*="Change to dark mode"]').length) {
        return cy.get('button[aria-label*="Change to dark mode"]').click()
      } else {
        return "No light mode"
      }
    })
    cy.injectAxe()
  })
  it("Has no detectable a11y violations on dark theme", () => {
    cy.checkA11y()
  })
})
