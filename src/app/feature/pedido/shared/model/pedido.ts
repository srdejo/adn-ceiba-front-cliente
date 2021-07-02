import { Cliente } from "@producto/shared/model/cliente";
import { DetallePedido } from "@producto/shared/model/detalle-pedido";

export class Pedido {
    id: number;
    hora: string;
    estadoPedido: string;
    valorDomicilio: number;
    cliente: Cliente;
    detallePedido: DetallePedido[];

    constructor(id: number, hora: string, estadoPedido: string, valorDomicilio: number
        , cliente: Cliente, detallePedido: DetallePedido[]) {
        this.id = id;
        this.hora = hora;
        this.estadoPedido = estadoPedido;
        this.valorDomicilio = valorDomicilio;
        this.cliente = cliente;
        this.detallePedido = detallePedido;
    }
}
