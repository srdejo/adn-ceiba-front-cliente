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

    it('Deberia listar productos', () => {
        page.navigateTo();
        expect(producto.contarProductos()).toBeGreaterThan(0);
    });

    it('Agregar productos', () => {
        page.navigateTo();
        producto.agregarProducto();
        expect(producto.contarProductos()).toBeLessThanOrEqual(producto.contarProductosSeleccionados());
    });

    it('Solicitar pedido', async () => {
        // Arrange
        let nombre: string = "Test Name";
        page.navigateTo();
        producto.agregarProducto();
        pedido.solicitarPedido();
        pedido.ingresarNombre(nombre);
        pedido.ingresarCelular("3130000000");
        pedido.ingresarDireccion("Av Siempre Viva");
        // Act
        pedido.confirmarPedido();
        // Assert
        expect(browser.getCurrentUrl()).toContain("pedido/detalle/")
        
    });

    it('Cancelar pedido', async () => {
        // Arrange
        let nombre: string = "Test Name";
        page.navigateTo();
        producto.agregarProducto();
        pedido.solicitarPedido();
        pedido.ingresarNombre(nombre);
        pedido.ingresarCelular("3130000000");
        pedido.ingresarDireccion("Av Siempre Viva");
        // Act
        pedido.cancelarPedido();
        // Assert
        expect(browser.getCurrentUrl()).not.toContain("pedido/detalle/")
        
    });
});
