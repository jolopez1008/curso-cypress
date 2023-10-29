import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    const userName = 'random01'
    const password = 'random01'
    cy.visit('https://www.demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.loginWithCredentials(userName, password)
    cy.get('a#nameofuser').should('contain', userName)
    cy.wait(5000)
  })
})