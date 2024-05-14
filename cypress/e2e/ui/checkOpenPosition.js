/// <reference types="cypress" />

export default (orderAmountX, orderAmountY, orderTotal) => {
  
  const postionRow = 'div[data-testid="positionTableInfo"] div.list-item-container'
  const buySize = 'div.size.size-buy'

  cy.get('div[data-testid="OrderHistory"]').click()
  cy.get('div[data-testid="Positions"]').click()
  cy.get(postionRow).should('be.visible')
  cy.get(postionRow)
    .find(buySize)
    .should('have.class', 'size size-buy')
    .invoke('text')
    .should('be.a', 'string')
    .then(parseFloat)
    .should('be.a', 'number')
    .and('equal', orderAmountX, orderAmountY, orderTotal)       
};
