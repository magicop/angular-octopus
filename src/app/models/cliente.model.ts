
export class ClienteModel {
    _id: string;
    nombre: string;
    url: string;
    img: string;
    activo: boolean;

    constructor(){
        this.activo = true;
    }
}