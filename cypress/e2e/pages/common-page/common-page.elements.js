export class CommonPagesElements{
    static get topMenu(){
        return{
            get home () { return cy.contains("a", "Home")},
            get contact () { return cy.contains("a", "Contact")},
            get about () { return cy.contains("a", "About")},
            get cart () { return cy.contains("a", "Cart")},
            get logIn () { return cy.contains("a", "Log in")},
            get signUp () { return cy.contains("a", "Sign up")},
        }
    }
}