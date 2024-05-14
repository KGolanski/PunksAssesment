/// <reference types="cypress" />

export default (orderAmountX, orderAmountY, orderTotal) => {
  
  const historyRow = 'div[id="ORDER_HISTORY"] div[data-testid="DataTable"] div.css-7ojini'
  const historyAmount = 'div:nth-child(9)'
  const historySide = 'div:nth-child(5)'

  cy.get('div[data-testid="OrderHistory"]').click()

  const testData = [
    {
        eq: 0,
        side: 'Close Long',
        order: orderTotal
    },
    {
        eq: 1,
        side: 'Open Long',
        order: orderAmountY
    },
    {
        eq: 2,
        side: 'Open Long',
        order: orderAmountX
    }
  ]

  testData.forEach((data) => {

  cy.get(historyRow)
    .find(historyAmount).eq(data.eq)
    .invoke('text')
    .should('be.a', 'string')
    .then(parseFloat)
    .should('be.a', 'number')
    .and('equal', data.order)

  cy.get(historyRow)
    .find(historySide).eq(data.eq)
    .invoke('text')
    .should('be.a', 'string')
    .and('equal', data.side)
  });
};
