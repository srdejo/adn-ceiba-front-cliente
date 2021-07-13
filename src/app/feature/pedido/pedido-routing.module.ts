import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { PedidoComponent } from './components/pedido/pedido.component';

const routes: Routes = [
  { path: '', component: ListarProductoComponent },
  { path: 'detalle/:id', component: PedidoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
