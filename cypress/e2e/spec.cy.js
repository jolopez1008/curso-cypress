import { HomeMethods } from "./pages/home/home.methods"
import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    // const userName = 'random01'
    // const password = 'random01'
    cy.visit('https://www.demoblaze.com/')
    HomeMethods.clickOnProduclink('Samsung galaxy s6')
    cy.wait(5000)
  })
})