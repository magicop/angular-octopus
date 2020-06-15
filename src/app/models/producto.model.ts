
export class ProductoModel {
    _id: string;
    titulo: string;
    descripcion: string;
    url: string;
    img: string;
    activo: boolean;

    constructor(){
        this.activo = true;
    }
}