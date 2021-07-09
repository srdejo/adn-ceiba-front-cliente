import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { PedidoService } from '@pedido/shared/service/pedido.service';
import { of } from 'rxjs';

import { ConfirmarPedidoComponent } from './confirmar-pedido.component';

describe('ConfirmarPedidoComponent', () => {
  let component: ConfirmarPedidoComponent;
  let fixture: ComponentFixture<ConfirmarPedidoComponent>;
  let pedidoService: PedidoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmarPedidoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [PedidoService, HttpService,
        { provide: MatDialogRef, useValue: {} },
        { provide: MatSnackBar, useValue: [] },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarPedidoComponent);
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
