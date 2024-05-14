/// <reference types="cypress" />

export default (userName, password) => {
  
  cy.login(userName,password)
};
