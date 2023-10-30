export class CartElements{
    static get buttons(){
        return{
            get placeOrder() { return cy.get('button[data-toggle="modal"]')},
        }
    }

    static get links(){ ////td[text()="Samsung galaxy s6"]/ancestor::tr//a
        return{
            delete(productName){ return cy.contains('td', productName).closest('tr').find('a')},
        }
    }
}