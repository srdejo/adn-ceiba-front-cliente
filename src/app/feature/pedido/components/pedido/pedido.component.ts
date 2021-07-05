import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from '../../shared/model/pedido';
import { PedidoService } from '@pedido/shared/service/pedido.service';
import { Cliente } from '@producto/shared/model/cliente';
import { DetallePedido } from '@pedido/shared/model/detalle-pedido';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  data: DetallePedido[] = [];

  id: number;
  private sub: any;
  pedido: Pedido = new Pedido(null, null, null, 0, new Cliente(null, '', '', ''), null);
  total: number = 0;

  constructor(private route: ActivatedRoute,
    protected pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.pedidoService.consultar(params.id).subscribe((p) => {
        this.pedido = p;
        this.data = this.pedido.detallePedidos;
        this.total = this.calcularTotal()
      })
    });
  }

  calcularTotal(): number {
    let suma = 0;
    this.data.forEach(detalle => {
      suma += (detalle.valorUnidad * detalle.cantidad)
    })
    return suma + this.pedido.valorDomicilio;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
