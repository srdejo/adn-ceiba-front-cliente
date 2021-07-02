import { Producto } from "./producto";

export class DetallePedido {
    id: number;
    producto: Producto;
    cantidad: number;
    valorUnidad: number;
    observacion: string;

    constructor(id: number, producto: Producto, cantidad: number, valorUnidad: number, observacion: string) {
        this.id = id;
        this.producto = producto;
        this.cantidad = cantidad;
        this.valorUnidad = valorUnidad;
        this.observacion = observacion;
    }
}
