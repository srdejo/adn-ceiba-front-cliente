import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ElementoAlmacenado } from '@core/modelo/elemento-almacenado';
import { HttpService } from '@core/services/http.service';
import { Cliente } from '@producto/shared/model/cliente';
import { environment } from 'src/environments/environment';
import { DtoPedido } from '../model/dto-pedido';

import { PedidoService } from './pedido.service';

describe('PedidoService', () => {
  let httpMock: HttpTestingController;
  let service: PedidoService;
  const apiEndpointProductos = `${environment.endpoint}/pedidos`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PedidoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(PedidoService);
  });

  it('should be created', () => {
    const productService: PedidoService = TestBed.inject(PedidoService);
    expect(productService).toBeTruthy();
  });

  it('Deberia almacenar el pedido', () => {
    const dummyPedido = new DtoPedido(new Cliente(null, "Cliente Prueba", "30000000", "Calle Siempre Viva"), null);
    service.guardar(dummyPedido).subscribe((respuesta) => {
      expect(respuesta).toEqual({ valor: 1 });
    })
    const req = httpMock.expectOne(apiEndpointProductos);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<ElementoAlmacenado>({ body: { valor: 1 } }));
  });

  // it('Deberia consultar un pedido') ToDo
});
