import { by, element } from 'protractor';

export class ProductoPage {

    private listaProductos = element.all(by.css('mat-card'));
    private botonAgregar = element.all(by.css('mat-card-actions > button'))
    private listaProductosSeleccionados = element.all(by.css('div.mat-list-item-content'));


    async contarProductos() {
        return this.listaProductos.count();
    }

    async contarProductosSeleccionados() {
        return this.listaProductosSeleccionados.count();
    }

    async agregarProducto() {
        await this.botonAgregar.click();
    }

    
}
