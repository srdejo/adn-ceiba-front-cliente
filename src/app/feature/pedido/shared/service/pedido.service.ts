import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { ElementoAlmacenado } from '@core/modelo/elemento-almacenado';
import { environment } from 'src/environments/environment';
import { DtoPedido } from '../model/dto-pedido';
import { Pedido } from '../model/pedido';

@Injectable()
export class PedidoService {

  constructor(protected http: HttpService) { }

  public guardar(pedido: DtoPedido) {
    return this.http.doPost<DtoPedido, ElementoAlmacenado>(`${environment.endpoint}/pedidos`, pedido,
      this.http.optsName('crear pedido'));
  }

  public consultar(id: number) {
    return this.http.doGet<Pedido>(`${environment.endpoint}/pedidos/${id}`, this.http.optsName('consultar productos'))
  }

}
