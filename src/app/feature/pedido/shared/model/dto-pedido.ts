import { Cliente } from './cliente';
import { DtoDetalle } from './dto-detalle';

export class DtoPedido {
    cliente: Cliente;
    detallePedidos: DtoDetalle[];

    constructor(cliente: Cliente, detallePedidos: DtoDetalle[]) {
        this.cliente = cliente;
        this.detallePedidos = detallePedidos;
    }

}
