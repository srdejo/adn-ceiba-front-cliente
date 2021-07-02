import { Component, Input, OnInit } from '@angular/core';
import { DetallePedido } from '@producto/shared/model/detalle-pedido';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarPedidoComponent } from '../confirmar-pedido/confirmar-pedido.component';
import { Cliente } from '@producto/shared/model/cliente';
import { PedidoService } from '@pedido/shared/service/pedido.service';

@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.component.html',
  styleUrls: ['./crear-pedido.component.css']
})
export class CrearPedidoComponent implements OnInit {

  cliente: Cliente;

  valorDomicilio: number = 2000;
  @Input() productosSeleccionados: DetallePedido[]

  constructor(public dialog: MatDialog, protected pedidoService: PedidoService) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmarPedidoComponent, {
      disableClose: true,
      data: this.productosSeleccionados
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });

    dialogRef.beforeClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}

