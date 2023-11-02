import { PlaceOrderElements } from "./place-order.elements";

export class PlaceOrderMethods{
    static insertName(name){
        PlaceOrderElements.textBoxes.name.type(name);
    }

    static insertCountry(country){
        PlaceOrderElements.textBoxes.country.type(country);
    }

    static insertCity(city){
        PlaceOrderElements.textBoxes.city.type(city);
    }

    static insertCreditCard(creditCard){
        PlaceOrderElements.textBoxes.creditCard.type(creditCard);
    }

    static insertMonth(month){
        PlaceOrderElements.textBoxes.month.type(month);
    }

    static insertYear(year){
        PlaceOrderElements.textBoxes.year.type(year);
    }

    static clickOnPurchaseButton(){
        PlaceOrderElements.buttons.purchase.click();
    }

    static clickOnCloseButton(){
        PlaceOrderElements.buttons.close.click();
    }

    static insertOrderInformation(data){
        this.insertName(data.name);
        this.insertCountry(data.country);
        this.insertCity(data.city);
        this.insertCreditCard(data.creditCard);
        this.insertMonth(data.month);
        this.insertYear(data.year);
    }
}