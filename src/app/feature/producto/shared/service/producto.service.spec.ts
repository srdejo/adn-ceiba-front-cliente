import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductoService } from './producto.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Producto } from '../model/producto';

describe('ProductoService', () => {
  let httpMock: HttpTestingController;
  let service: ProductoService;
  const apiEndpointProductos = `${environment.endpoint}/productos/disponible`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ProductoService);
  });

  it('should be created', () => {
    const productService: ProductoService = TestBed.inject(ProductoService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar productos', () => {
    const dummyProductos = [
      new Producto(1, 'Producto 1', 'Descripcion del producto', 5000, 1), new Producto(2, 'Producto 2', 'Descripcion Producto 2', 15000, 2)
    ];
    service.consultar().subscribe(productos => {
      expect(productos.length).toBe(2);
      expect(productos).toEqual(dummyProductos);
    });
    const req = httpMock.expectOne(apiEndpointProductos);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProductos);
  });


});
