export class PlaceOrderElements{
    static get textBoxes(){
        return{
            get name() { return cy.get('#name')},
            get country() { return cy.get('#country')},
            get city() { return cy.get('#city')},
            get creditCard() { return cy.get('#card')},
            get month() { return cy.get('#month')},
            get year() { return cy.get('#year')}
        }
    }

    static get buttons(){
        return{
            get close () { return cy.get('div[id="orderModal"] button').eq(1)},
            get purchase() { return cy.contains('button', 'Purchase')}
        }
    }
}