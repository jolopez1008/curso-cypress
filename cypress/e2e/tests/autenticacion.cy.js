import { CommonPagesData } from "../pages/common-page/common-page.data";
import { CommonPagesMethod } from "../pages/common-page/common-page.mothods";
import { LoginMethods } from "../pages/login/login.methods";
import { LoginData } from "../pages/login/login.data";
import { Logger } from "../util/logger";

describe(CommonPagesData.testSuite.autenticacion, () => {
    it(': Inicio de sesión válido', () => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPagesMethod.navigateToDemoBlaze()

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Log in" en la barra de navegación.')
        CommonPagesMethod.clickOnLogInOption()

        Logger.stepNumber(3)
        Logger.step('Ingresar un nombre de usuario y contraseña válidos.')
        LoginMethods.insertUserName(LoginData.validCredentials.userName)
        LoginMethods.insertPassword(LoginData.validCredentials.password)

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Log in" para iniciar sesión.')
        LoginMethods.clickLogin()
        Logger.verification('Verificar que se muestra el mensaje Welcome user.')
        CommonPagesMethod.verifyUserIsSigned(LoginData.validCredentials.userName)

        Logger.postCondition('Cerrar sesión')
        CommonPagesMethod.logOut()
        cy.wait(5000)
    })

    it(': Inicio de sesión inválido', () => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPagesMethod.navigateToDemoBlaze()

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Log in" en la barra de navegación.')
        CommonPagesMethod.clickOnLogInOption()

        Logger.stepNumber(3)
        Logger.step('Ingresar un nombre de usuario y contraseña inválidos.')
        LoginMethods.insertUserName(LoginData.validCredentials.userName)
        LoginMethods.insertPassword('password invalido')

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Log in" para iniciar sesión.')
        LoginMethods.clickLogin()
        Logger.verification('Verificar que se muestra el mensaje Welcome user.')
        LoginMethods.verifyWrongPasswordMessage()
    })
});