export class SignupMethods{
    static insertUserName(userName){
        cy.get('input#sign-username').invoke('val', userName);
    }

    static insertPassword(password){
        cy.get('input#sign-password').invoke('val', password);
    }

    static clickSignup(){
        cy.contains('button', 'Sign up').click();
    }

    static clickClose(){
        cy.contains('button', 'Close').eq(1).click();
    }

    static signupWithCredentials(userName, password){
        SignupMethods.insertUserName(userName);
        SignupMethods.insertPassword(password);
        SignupMethods.clickSignup();
    }
}