import { by, element } from 'protractor';

export class PedidoPage {
    private inputNombre = element.all(by.id("nombre"));
    private inputCelular = element.all(by.id("celular"));
    private inputDireccion = element.all(by.id("direccion"));
    private botonSolicitar = element.all(by.id("btnSolicitarPedido"));
    private botonConfirmar = element.all(by.id("btnConfirmar"));
    private botonCancelar = element.all(by.id("btnCancelar"));
    
    async ingresarNombre(s: string) {
        await this.inputNombre.sendKeys(s);
    }

    async ingresarCelular(s: string) {
        await this.inputCelular.sendKeys(s);
    }

    async ingresarDireccion(s: string) {
        await this.inputDireccion.sendKeys(s);
    }

    async solicitarPedido() {
        await this.botonSolicitar.click();
    }
    
    async confirmarPedido() {
        await this.botonConfirmar.click();
    }

    async cancelarPedido() {
        await this.botonCancelar.click();
    }


    async confirmarEstaHabilitado(){
        return this.botonConfirmar.isEnabled();
    }
}