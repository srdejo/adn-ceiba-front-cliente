import { AppPage } from '../app.po';
import { ProductoPage } from '../page/producto/producto.po';

describe('workspace-project Producto', () => {
    let page: AppPage;
    let producto: ProductoPage;
    

    beforeEach(() => {
        page = new AppPage();
        producto = new ProductoPage();
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

});
