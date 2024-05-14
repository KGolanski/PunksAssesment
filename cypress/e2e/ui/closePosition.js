/// <reference types="cypress" />

export default () => {
  
  const postionRow = 'div[data-testid="positionTableInfo"] div.list-item-container'
  const closeByMarketPrice = 'div.closePosition button'

  cy.get('div[data-testid="Positions"]').click()
  cy.get(postionRow).should('be.visible')
  cy.get(postionRow)
    .find(closeByMarketPrice)
    .first()
    .invoke('text')
    .should('be.a', 'string')
    .and('equal', 'Market')
  cy.get(postionRow)
    .find(closeByMarketPrice)
    .first()
    .click({force: true})  
  cy.wait('@getServerRequest').its('response.statusCode').should('eq',200)  
};
