import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { PedidoService } from '@pedido/shared/service/pedido.service';
import { of } from 'rxjs';

import { PedidoComponent } from './pedido.component';

describe('PedidoComponent', () => {
  let component: PedidoComponent;
  let fixture: ComponentFixture<PedidoComponent>;
  let pedidoService: PedidoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule
      ],
      providers: [PedidoService, HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoComponent);
    component = fixture.componentInstance;
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
