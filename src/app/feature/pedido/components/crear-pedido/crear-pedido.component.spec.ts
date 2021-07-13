import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { PedidoService } from '@pedido/shared/service/pedido.service';
import { DetallePedido } from '@shared/model/detalle-pedido';
import { Producto } from '@shared/model/producto';
import { of } from 'rxjs';


import { CrearPedidoComponent } from './crear-pedido.component';

describe('CrearPedidoComponent', () => {
  let component: CrearPedidoComponent;
  let fixture: ComponentFixture<CrearPedidoComponent>;
  let pedidoService: PedidoService;
  const detalle: DetallePedido = new DetallePedido(null, new Producto(null, 'Comida', 'descripcion', 5000, 1), 1, 5000, '');
  const productosSeleccionados: DetallePedido[] = Array();
  productosSeleccionados.push(detalle);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CrearPedidoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule,
        MatIconModule,
        MatListModule
      ],
      providers: [PedidoService, HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPedidoComponent);
    component = fixture.componentInstance;
    component.productosSeleccionados = productosSeleccionados;
    pedidoService = TestBed.inject(PedidoService);
    spyOn(pedidoService, 'guardar').and.returnValue(
      of({ valor: 1 })
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
