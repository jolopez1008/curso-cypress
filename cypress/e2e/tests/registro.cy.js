import { CommonPagesData } from "../pages/common-page/common-page.data";
import { CommonPagesMethod } from "../pages/common-page/common-page.mothods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { SignupMethods } from "../pages/signup/signup.methods";
import { Logger } from "../util/logger";
const user = CommonPagesMethod.generateRandomString();
const password = CommonPagesMethod.generateRandomString(7);
const existingUser = LoginData.validCredentials.userName;

describe(CommonPagesData.testSuite.registro, () => {
    it('Registro de Valido', () => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')    
        CommonPagesMethod.navigateToDemoBlaze()

        Logger.stepNumber(2)
        Logger.step('Hacer click en la opción de registro')
        CommonPagesMethod.clickOnSignUpOption()

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con información válida.')
        SignupMethods.insertUserName(user)
        SignupMethods.insertPassword(password)

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar el usuario.')
        SignupMethods.clickSignup()
        Logger.verification('Verificar que se mustra el mensaje Sign up successful.')
        SignupMethods.verifySignupSuccessFulMessageIsDisplayed()
    })

    it('Registro de Inalido', () => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')    
        CommonPagesMethod.navigateToDemoBlaze()

        Logger.stepNumber(2)
        Logger.step('Hacer click en la opción de registro')
        CommonPagesMethod.clickOnSignUpOption()

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con información inválida.')
        SignupMethods.insertUserName(existingUser)
        SignupMethods.insertPassword(password)

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar el usuario.')
        SignupMethods.clickSignup()
        Logger.verification('Verificar que se mustra el mensaje This user already exist.')
        SignupMethods.verifyThisUserAlreadyExistFulMessageIsDisplayed()
    })
});