import { NgModule } from '@angular/core';

import { PedidoRoutingModule } from './pedido-routing.module';
import { CrearPedidoComponent } from './components/crear-pedido/crear-pedido.component';
import { SharedModule } from '@shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ConfirmarPedidoComponent } from './components/confirmar-pedido/confirmar-pedido.component';
import { PedidoService } from './shared/service/pedido.service';
import { PedidoComponent } from './components/pedido/pedido.component';
// elementos material design
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    CrearPedidoComponent,
    ConfirmarPedidoComponent,
    PedidoComponent,
  ],
  imports: [
    PedidoRoutingModule,
    SharedModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTableModule
  ],
  providers: [PedidoService],
  exports: [CrearPedidoComponent]
})
export class PedidoModule { }
