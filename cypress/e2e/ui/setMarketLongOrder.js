/// <reference types="cypress" />

export default (orderAmountX,orderAmountY) => {

  cy.get('div[date-testid="market"]').click()
  cy.get('input[name="unitAmount"]').clear().type(`${orderAmountX}`, `${orderAmountY}`)
  cy.get('div [name="orderForm"] div').find('button[data-bn-type="button"]').eq(2).invoke('text').and('equal','Open long')
  cy.get('div [name="orderForm"] div').find('button[data-bn-type="button"]').eq(2).click({force:true})
  cy.wait('@getServerRequest').its('response.statusCode').should('eq',200)
};
