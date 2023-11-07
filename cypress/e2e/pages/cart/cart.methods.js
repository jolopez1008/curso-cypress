import { Logger } from "../../util/logger";
import { CommonPagesMethod } from "../common-page/common-page.mothods";
import { LoginMethods } from "../login/login.methods";
import { CartElements } from "./cart.elements";

export class CartMethods{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click();
    }

    static verifyproductAdded(productName){
        CartElements.links.delete(productName).should('be.visible');
    }

    static verifyCartPageIsShown(){
        cy.url().should('include', 'cart.html');
    }

    static clickOnPlaceOrderButton(){
        CartElements.buttons.placeOrder.click();
    }

    static deleteProducts(){
        cy.intercept('POST','https://api.demoblaze.com/deleteitem').as('deleteItem');
        cy.get('a[onclick*="deleteItem"]').each(link=>{
            link.click()
            cy.wait('@deleteItem')
        })

    }

    static emptyCart(user, password){
        Logger.subStep("NAvigate to Demoblaze");
        CommonPagesMethod.navigateToDemoBlaze();
        Logger.subStep("Log out");
        CommonPagesMethod.logOut();
        Logger.subStep("Click on Home option");
        CommonPagesMethod.clickOnHomeOption();
        Logger.subStep("Click on Login Option");
        CommonPagesMethod.clickOnLogInOption();
        Logger.subStep("Login with credential");
        LoginMethods.loginWithCredentials(user,password);
        Logger.subStep("Click on Car option");
        CommonPagesMethod.clickOnCartOption();
        Logger.subStep("Delete Items");
        this.deleteProducts();
    }
}