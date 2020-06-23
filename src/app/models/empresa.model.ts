
export class EmpresaModel {
    _id: string;
    nombre: string;
    direccion: string;
    telefono: string;
    telefono2: string;
    email: string;
    activo: boolean;

    constructor(){
        this.activo = true;
    }
}