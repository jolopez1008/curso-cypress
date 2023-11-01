import { CommonPagesData } from "../pages/common-page/common-page.data";
import { CommonPagesMethod } from "../pages/common-page/common-page.mothods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginMethods } from "../pages/login/login.methods";
import { LoginData } from "../pages/login/login.data";
import { Logger } from "../util/logger";

const user = LoginData.validCredentials;

describe(CommonPagesData.testSuite.catalogoYCompra, () => {
    it('Navegacion por categoria', () => { 
        
        Logger.stepNumber(1);
        Logger.step('Iniciar sesion como usuario registrado');
        Logger.subStep('Navegar a la página de inicio');
        CommonPagesMethod.navigateToDemoBlaze();
        Logger.subStep('Hacer click en la opción de login');
        CommonPagesMethod.clickOnLogInOption();
        LoginMethods.loginWithCredentials(user.userName, user.password);

        Logger.stepNumber(2);
        Logger.step('Navegar a la pagina de inicio');
        CommonPagesMethod.clickOnHomeOption();

        Logger.stepNumber(3);
        Logger.step('Seleccionar una categoria de productos en el menu de navegacion');
        HomeMethods.clickOnMonitorsOption();
        Logger.verification('Verificar que se muestren los productos de la categoria seleccionada');
        HomeMethods.verifyProductDisplayed('Apple monitor 24');
        HomeMethods.verifyProductDisplayed('ASUS Full HD');

    })
});