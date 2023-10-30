import { CommonPagesData } from "./common-page.data";
import { CommonPagesElements } from "./common-page.elements";

export class CommonPagesMethod{
    static navigateToDemoBlaze(){
        cy.clearCookies()
        cy.visit(CommonPagesData.urls.homePage)
    }

    static clickOnHomeOption(){
        CommonPagesElements.topMenu.home.click()
    }

    static clickOnContactOption(){
        CommonPagesElements.topMenu.contact.click()
    }

    static clickOnAboutOption(){
        CommonPagesElements.topMenu.about.click()
    }   

    static clickOnCartOption(){
        CommonPagesElements.topMenu.cart.click()
    }   

    static clickOnLogInOption(){
        CommonPagesElements.topMenu.logIn.click()
    }   

    static clickOnSignUpOption(){
        CommonPagesElements.topMenu.signUp.click()
    }   
    
    static verifyAlert(expectedMessage){
        cy.on('window:alert', (str) => {
            expect(str).to.equal(expectedMessage)
        })
    }
}