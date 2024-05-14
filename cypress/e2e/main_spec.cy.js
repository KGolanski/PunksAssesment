/// <reference types="cypress" />

import login from "./ui/login";
import getOpenTab from "./ui/getOpenTab";
import setMarketLongOrder from "./ui/setMarketLongOrder";
import checkOpenPosition from "./ui/checkOpenPosition";
import checkOrderHistory from "./ui/checkOrderHistory";
import closePosition from "./ui/closePosition";

context(".punks-desktop", () => {

    const userName = Cypress.env("userName")
    const password = Cypress.env("password")
    const orderAmountX = Number(Cypress.env("orderAmountX"))
    const orderAmountY = Number(Cypress.env("orderAmountY"))
    const orderTotal = orderAmountX + orderAmountY

    

    // https://testnet.binancefuture.com/bapi/futures/v1/private/future/order/place-order
    // https://testnet.binancefuture.com/bapi/futures/v1/private/future/user-data/trade-history

    beforeEach(() => {
      
      cy.viewport("macbook-13")
      cy.intercept('POST','**/place-order').as('getServerRequest')
    });
  
    afterEach(() => {

      cy.clearLocalStorage()
    })

      describe("buing crypto", () => {
          
        it("Buy/SELL - BTC, market price", () => {

            login(userName,password)
            cy.log("Plesae, handle with captcha manually, then wait for 'Sign in' of api.saasexch.co, click 'cancel' on popup, then hit 'play' at the top of cypress test runner window")
            cy.pause()
            cy.url().should("include", "en/futures/BTCUSDT");
            cy.get('.css-4rbxuz').click()
            getOpenTab()
            setMarketLongOrder(orderAmountX)
            checkOpenPosition(orderAmountX)
            setMarketLongOrder(orderAmountY)
            cy.wait(3000)
            checkOpenPosition(orderTotal)
            closePosition()
            cy.reload()
            checkOrderHistory(orderAmountX, orderAmountY, orderTotal)
        })
      })
  })