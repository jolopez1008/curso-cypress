import { CommonPagesData } from "../pages/common-page/common-page.data";
import { CommonPagesMethod } from "../pages/common-page/common-page.mothods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginMethods } from "../pages/login/login.methods";
import { LoginData } from "../pages/login/login.data";
import { ProductDetailsMethods } from "../pages/product-details/product-details.methods";
import { Logger } from "../util/logger";
import { CartMethods } from "../pages/cart/cart.methods";

const user = LoginData.validCredentials;
const producto = "Apple monitor 24";

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

    it('Agregar producto al carrito', () => { 
        
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

        Logger.stepNumber(4);
        Logger.step('Hacer click en un Producto especifico');
        HomeMethods.clickOnProduclink(producto);

        Logger.stepNumber(5);
        Logger.verification('Verificar que se muestra la página de detalles del producto');
        ProductDetailsMethods.verifyProductDetailsPageDisplayed(producto);

        Logger.stepNumber(6);
        Logger.step('Hacer click en el boton de agregar al carrito');
        ProductDetailsMethods.clickOnAddToCartButton();

        Logger.stepNumber(7);
        Logger.verification('Verificar que se muestra el mensaje de producto agregado');
        ProductDetailsMethods.verifyProductAddedMessage();
        CommonPagesMethod.clickOnCartOption();
        CartMethods.verifyproductAdded(producto);

    })
});