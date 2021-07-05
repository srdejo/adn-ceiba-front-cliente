export class Producto {
    id: number;
    nombre: string;
    descripcion: string;
    valor: number;
    valorOferta: number;
    idComercio: number;

    constructor(id: number, nombre: string, descripcion: string, valor: number, idComercio: number) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.valor = valor;
        this.idComercio = idComercio;
    }
}
