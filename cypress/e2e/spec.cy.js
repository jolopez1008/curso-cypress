import { CartMethods } from "./pages/cart/cart.methods"
import { HomeMethods } from "./pages/home/home.methods"
import { LoginMethods } from "./pages/login/login.methods"
import { Logger } from "./util/logger"

describe('template spec', () => {
  it('passes', () => {
    const userName = 'random01'
    const password = 'random01'
    Logger.stepNumber(1)
    Logger.step('Navigate to demo blaze')
    cy.visit('https://www.demoblaze.com/')

    Logger.stepNumber(2)
    Logger.step('Click on login option')
    cy.get('a[data-target="#logInModal"]').click()

    Logger.stepNumber(3)
    Logger.step(`Login with credentials ${userName} and ${password}`)  
    LoginMethods.loginWithCredentials(userName, password)
    Logger.verification(`The Home should "Welcome ${userName}"`)
    cy.get('a#nameofuser').should('contain.text', userName)
  })
})