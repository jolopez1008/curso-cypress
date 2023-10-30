import { CartMethods } from "./pages/cart/cart.methods"
import { HomeMethods } from "./pages/home/home.methods"
import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    // const userName = 'random01'
    // const password = 'random01'
    cy.visit('https://www.demoblaze.com/')
    cy.wait(30000)
    CartMethods.clickOnDeleteLink('Samsung galaxy s6')
    cy.wait(30000)
  })
})