import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from '../../shared/model/pedido';
import { PedidoService } from '@pedido/shared/service/pedido.service';
import { DetallePedido } from '@pedido/shared/model/detalle-pedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  data: DetallePedido[] = [];
  id: number;
  pedido: Pedido;
  total = 0;

  constructor(private route: ActivatedRoute, protected pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.pedidoService.consultar(params.id).subscribe((respuesta) => {
        this.pedido = respuesta;
        this.data = this.pedido.detallePedidos;
        this.total = this.calcularTotal();
      });
    });
  }

  calcularTotal(): number {
    let suma = 0;
    this.data.forEach(detalle => {
      suma += (detalle.valorUnidad * detalle.cantidad);
    });
    return suma + this.pedido.valorDomicilio;
  }

}
