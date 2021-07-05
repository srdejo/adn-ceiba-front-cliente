import { NgModule } from '@angular/core';

import { ProductoRoutingModule } from './producto-routing.module';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { SharedModule } from '@shared/shared.module';
import { ProductoService } from './shared/service/producto.service';
import { PedidoModule } from '@pedido/pedido.module';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ListarProductoComponent,
  ],
  imports: [
    ProductoRoutingModule,
    SharedModule,
    PedidoModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  providers: [ProductoService]
})
export class ProductoModule { }
