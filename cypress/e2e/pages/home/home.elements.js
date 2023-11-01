export class HomeElements{
    static get categoriesMenu(){
        return{
            get phones() { return cy.contains('a', 'Phones')},
            get laptops() { return cy.contains('a', 'Laptops')},
            get monitors() { return cy.contains('a', 'Monitors')}
        }
    }

    static productByName(name){
        return cy.contains('a', name, {timeout: 30000});
    }
}