import { Producto } from '@producto/shared/model/producto';

export class DetallePedido {
    id: number;
    dtoProducto: Producto;
    cantidad: number;
    valorUnidad: number;
    observacion: string;

    constructor(id: number, dtoProducto: Producto, cantidad: number, valorUnidad: number, observacion: string) {
        this.id = id;
        this.dtoProducto = dtoProducto;
        this.cantidad = cantidad;
        this.valorUnidad = valorUnidad;
        this.observacion = observacion;
    }
}
