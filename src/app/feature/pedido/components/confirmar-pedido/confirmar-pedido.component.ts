import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorPeticion } from '@core/modelo/error-peticion';
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
  loading:boolean = false;

  constructor(
    protected pedidoService: PedidoService,
    public dialogRef: MatDialogRef<ConfirmarPedidoComponent>,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.construirFormularioCliente();
  }

  cancelar() {
    this.dialogRef.close();
  }

  construirFormularioCliente() {
    this.clienteForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      celular: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO), Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      direccion: new FormControl('', [Validators.required])
    });
  }

  submitForm() {
    if (this.clienteForm.valid) {
      this.crearPedido()
    }
  }


  crearPedido() {
    this.loading = true;
    this.clienteForm.disable();
    this.pedidoService.guardar(new DtoPedido(10, [new DtoDetalle(1, 1)]))
      .subscribe({
        next: (x: any) => console.log("next", x),
        error: (err: ErrorPeticion) => {
          this.loading = false;
          console.error("error", err.status)
          this.clienteForm.enable();
          this._snackBar.open(err.error.mensaje);
        },
        complete: () => {
          this.loading = false;
          this.clienteForm.enable();
          this._snackBar.open('Pedido confirmado correctamente');
          this.dialogRef.close()
        }
      })
  }
}
