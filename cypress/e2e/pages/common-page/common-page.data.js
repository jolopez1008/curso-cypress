export class CommonPagesData{
    static get urls(){
        return{
            get homePage () { return 'https://www.demoblaze.com/cart.html'},
        }
    }

    static get testSuite(){
        return{
            registroYAutenticacion: 'Registro y Autenticación',
            catalogoYCompra: 'Catálogo y Compra',
            
        }
    }
}