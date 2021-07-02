import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { DtoPedido } from '../model/dto-pedido';
import { Pedido } from '../model/pedido';

@Injectable()
export class PedidoService {

  constructor(protected http: HttpService) { }


  public guardar(pedido: DtoPedido) {
    return this.http.doPost<DtoPedido, Pedido>(`${environment.endpoint}/pedidos`, pedido,
    this.http.optsName('crear/actualizar pedidos'));
  }
}
