export class Cliente {
    id: number;
    nombre: string;
    celular: string;
    direccion: string;

    constructor(id: number, nombre: string, celular: string, direccion: string) {
        this.id = id;
        this.nombre = nombre;
        this.celular = celular;
        this.direccion = direccion;
    }
}
