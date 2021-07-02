import { DtoDetalle } from "./dto-detalle";

export class DtoPedido {
    idCliente: number;
    detallePedidos: DtoDetalle[];

    constructor(idCliente: number, detallePedidos: DtoDetalle[]){
        this.idCliente = idCliente;
        this.detallePedidos = detallePedidos;
    }

}