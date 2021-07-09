import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';

const routes: Routes = [
  {
    path: '',
    component: ListarProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
