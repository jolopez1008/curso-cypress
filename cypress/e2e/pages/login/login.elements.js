export class LoginElements{
    static get tesxtBoxes(){
        return {
            get userName() { return cy.get('input#loginusername')},
            get password() { return cy.get('input#loginpassword')}
        }
    }

    static get buttons(){
        return {
            get login() { return cy.contains('button', 'Log in')},
            get cancel() { return cy.get('div[id="logInModal"] button').eq(1)}
        }
    }
}