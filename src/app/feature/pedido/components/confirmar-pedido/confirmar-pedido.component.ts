import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ElementoAlmacenado } from '@core/modelo/elemento-almacenado';
import { ErrorPeticion } from '@core/modelo/error-peticion';
import { DetallePedido } from '@pedido/shared/model/detalle-pedido';
import { DtoDetalle } from '@pedido/shared/model/dto-detalle';
import { DtoPedido } from '@pedido/shared/model/dto-pedido';
import { PedidoService } from '../../shared/service/pedido.service';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 10;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 10;

@Component({
  selector: 'app-confirmar-pedido',
  templateUrl: './confirmar-pedido.component.html',
  styleUrls: ['./confirmar-pedido.component.css']
})
export class ConfirmarPedidoComponent implements OnInit {

  clienteForm: FormGroup;
  loading = false;
  total = 0;
  dtoDetallePedido: DtoDetalle[] = Array();
  idPedido: number;

  constructor(
    protected pedidoService: PedidoService,
    public dialogRef: MatDialogRef<ConfirmarPedidoComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: DetallePedido[]
  ) { }

  ngOnInit(): void {
    this.construirFormularioCliente();
    this.calcularTotal();
    this.armarDtoDetalle();
  }

  cerrar() {
    this.dialogRef.close(this.idPedido);
  }

  calcularTotal() {
    this.data.forEach(detalle => {
      detalle.valorUnidad = (detalle.dtoProducto.valorOferta > 0) ? detalle.dtoProducto.valorOferta : detalle.dtoProducto.valor;
      this.total += detalle.valorUnidad;
    });
  }
  armarDtoDetalle() {
    this.data.forEach(detalle => {
      this.dtoDetallePedido.push(new DtoDetalle(detalle.cantidad, detalle.dtoProducto.id));
    });
  }

  construirFormularioCliente() {
    this.clienteForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      celular: new FormControl('', [Validators.required,
      Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
      Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      direccion: new FormControl('', [Validators.required])
    });
  }

  submitForm() {
    if (this.clienteForm.valid) {
      this.crearPedido();
    }
  }


  crearPedido() {
    this.loading = true;
    this.clienteForm.disable();
    this.pedidoService.guardar(new DtoPedido(this.clienteForm.value, this.dtoDetallePedido))
      .subscribe({
        next: (respuesta: ElementoAlmacenado) => this.idPedido = respuesta.valor,
        error: (err: ErrorPeticion) => {
          this.loading = false;
          this.clienteForm.enable();
          this.snackBar.open(err.error.mensaje);
        },
        complete: () => {
          this.loading = false;
          this.clienteForm.enable();
          this.snackBar.open('Pedido confirmado correctamente', '', {
            duration: 3000
          });
          this.cerrar();
        }
      });
  }
}
