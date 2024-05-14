// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

Cypress.Commands.add('login', (userName, password) => {
    
      cy.visit("/en/login")  
      cy.get('input[id="login_input_email"]')
        .should("be.visible")
        .type(userName, { log: false })
      cy.get('input[id="login_input_password"]')
        .should("be.visible").clear()
        .type(password, { log: false })
      cy.wait(3000)
      cy.get('button[id="login_input_login"]')
        .should("be.visible")
        .click()
  })