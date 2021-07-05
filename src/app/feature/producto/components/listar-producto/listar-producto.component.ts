import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductoService } from '@producto/shared/service/producto.service';
import { Producto } from '@producto/shared/model/producto';
import { DetallePedido } from '@pedido/shared/model/detalle-pedido';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  public listaProductos: Observable<Producto[]>;
  productoSeleccionado?: DetallePedido[];

  constructor(protected productoService: ProductoService) { }

  ngOnInit() {
    this.listaProductos = this.productoService.consultar();
    this.productoSeleccionado = Array();
  }

  onSelect(producto: Producto): void {
    let flagEncontrado:Boolean;
    flagEncontrado = false;

    this.productoSeleccionado.filter(detallePedido => {
      if(detallePedido.dtoProducto.id == producto.id){
        detallePedido.cantidad = detallePedido.cantidad + 1;
        flagEncontrado = true;
      }
    })

    if(!flagEncontrado){
      let nuevoDetallePedido =  new DetallePedido(null, producto, 1, producto.valor, "");
      this.productoSeleccionado.push(nuevoDetallePedido);    
    }
  }
}
