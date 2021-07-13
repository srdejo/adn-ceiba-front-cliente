import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarPedidoComponent } from '../confirmar-pedido/confirmar-pedido.component';
import { PedidoService } from '@pedido/shared/service/pedido.service';
import { Router } from '@angular/router';
import { DetallePedido } from '@pedido/shared/model/detalle-pedido';

@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.component.html',
  styleUrls: ['./crear-pedido.component.css']
})
export class CrearPedidoComponent implements OnInit {


  valorDomicilio = 2000;

  @Input() productosSeleccionados: DetallePedido[];

  constructor(
    public dialog: MatDialog,
    protected pedidoService: PedidoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmarPedidoComponent, {
      disableClose: true,
      data: this.productosSeleccionados
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['./pedido/detalle', result]);
    });
  }
}
