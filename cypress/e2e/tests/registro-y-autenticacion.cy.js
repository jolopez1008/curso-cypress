import { CommonPagesData } from "../pages/common-page/common-page.data";
import { CommonPagesMethod } from "../pages/common-page/common-page.mothods";
import { LoginMethods } from "../pages/login/login.methods";
import { SignupMethods } from "../pages/signup/signup.methods";
import { Logger } from "../util/logger";
const user = CommonPagesMethod.generateRandomString();
const password = CommonPagesMethod.generateRandomString(7);

describe(CommonPagesData.testSuite.registroYAutenticacion, () => {
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
        SignupMethods.verifySignupSuccessFulMessageIsDisplayed('Sign up successful.')
    })

});