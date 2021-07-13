import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarProductoComponent } from './listar-producto.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { MatCardModule } from '@angular/material/card';
import { PedidoModule } from '@pedido/pedido.module';
import { PedidoService } from '@pedido/shared/service/pedido.service';
import { Producto } from '@pedido/shared/model/producto';

describe('ListarProductoComponent', () => {
  let component: ListarProductoComponent;
  let fixture: ComponentFixture<ListarProductoComponent>;
  let productoService: PedidoService;
  const listaProductos: Producto[] = [new Producto(1, 'Producto 1', 'Descripcio producto', 1000, 1), new Producto(2, 'Producto 2', 'Descripcio producto', 1000, 1)];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarProductoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        MatCardModule,
        PedidoModule
      ],
      providers: [PedidoService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProductoComponent);
    component = fixture.componentInstance;
    productoService = TestBed.inject(PedidoService);
    spyOn(productoService, 'listar').and.returnValue(
      of(listaProductos)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaProductos.subscribe(resultado => {
      expect(2).toBe(resultado.length);
    });
  });

});
