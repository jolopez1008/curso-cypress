export class Logger{
    static stepNumber(stepNumber){
        const text = `Step # ${stepNumber}`
        cy.log(text)
        cy.allure().step(text)
    }

    static step(description){
        const text = `Step - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    static verification(description){
        const text = `Verification - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    static subStep(description){
        const text = `SubStep - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    static subVerification(description){
        const text = `SubVerification - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }   
}