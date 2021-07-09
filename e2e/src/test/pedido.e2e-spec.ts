import { AppPage } from '../app.po';
import { ProductoPage } from '../page/producto/producto.po';
import { PedidoPage } from '../page/pedido/pedido.po';
import { browser } from 'protractor';


describe('workspace-project Producto', () => {
    let page: AppPage;
    let producto: ProductoPage;
    let pedido: PedidoPage;

    beforeEach(() => {
        page = new AppPage();
        producto = new ProductoPage();
        pedido = new PedidoPage();
    });

    it('Solicitar pedido', async () => {
        // Arrange
        page.navigateTo();
        producto.agregarProducto();
        pedido.solicitarPedido();
        pedido.ingresarNombre('Test Name');
        pedido.ingresarCelular('3130000000');
        pedido.ingresarDireccion('Av Siempre Viva');
        // Act
        pedido.confirmarPedido();
        // Assert
        expect(browser.getCurrentUrl()).toContain('pedido/detalle/');
    });

    it('Cancelar pedido', async () => {
        // Arrange
        page.navigateTo();
        producto.agregarProducto();
        pedido.solicitarPedido();
        pedido.ingresarNombre('Test Name');
        pedido.ingresarCelular('3130000000');
        pedido.ingresarDireccion('Av Siempre Viva');
        // Act
        pedido.cancelarPedido();
        // Assert
        expect(browser.getCurrentUrl()).not.toContain('pedido/detalle/');
    });

    it('Celular con menos números', async () => {
        // Arrange
        page.navigateTo();
        producto.agregarProducto();
        pedido.solicitarPedido();
        pedido.ingresarNombre('Test Name');
        pedido.ingresarCelular('31300000');
        pedido.ingresarDireccion('Av Siempre Viva');
        // Act
        pedido.confirmarPedido();
        // Assert
        expect(browser.getCurrentUrl()).not.toContain('pedido/detalle/');
    });

});
