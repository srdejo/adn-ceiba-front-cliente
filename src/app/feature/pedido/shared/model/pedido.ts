import { Cliente } from './cliente';
import { DetallePedido } from './detalle-pedido';

export class Pedido {
    id: number;
    hora: string;
    estadoPedido: string;
    valorDomicilio: number;
    dtoCliente: Cliente;
    detallePedidos: DetallePedido[];

    constructor(
        id: number,
        hora: string,
        estadoPedido: string,
        valorDomicilio: number,
        dtoCliente: Cliente,
        detallePedidos: DetallePedido[]
    ) {

        this.id = id;
        this.hora = hora;
        this.estadoPedido = estadoPedido;
        this.valorDomicilio = valorDomicilio;
        this.dtoCliente = dtoCliente;
        this.detallePedidos = detallePedidos;
    }
}
