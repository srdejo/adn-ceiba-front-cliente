import { NgModule } from '@angular/core';

import { PedidoRoutingModule } from './pedido-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ConfirmarPedidoComponent } from './components/confirmar-pedido/confirmar-pedido.component';
import { PedidoService } from './shared/service/pedido.service';
import { PedidoComponent } from './components/pedido/pedido.component';
import { CrearPedidoComponent } from './components/crear-pedido/crear-pedido.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
// elementos material design
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    ConfirmarPedidoComponent,
    PedidoComponent,
    CrearPedidoComponent,
    ListarProductoComponent
  ],
  imports: [
    PedidoRoutingModule,
    SharedModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatTooltipModule,
  ],
  providers: [PedidoService]
})
export class PedidoModule { }
