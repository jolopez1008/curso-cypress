import { HomeElements } from "./home.elements";

export class HomeMethods{
    static clickOnPhonesOption(){
        HomeElements.categoriesMenu.phones.click();
    }

    static clickOnLaptopsOption(){
        HomeElements.categoriesMenu.laptops.click();
    }

    static clickOnMonitorsOption(){
        HomeElements.categoriesMenu.monitors.click();
    }

    static clickOnProduclink(productName){
        HomeElements.productByName(productName).click();
    }

    static verifyProductDisplayed(productName){
        HomeElements.productByName(productName).should('be.visible');
    }

    static verifyHomePageIsShown(){
        cy.url().should('include', 'index.html')
    }
}