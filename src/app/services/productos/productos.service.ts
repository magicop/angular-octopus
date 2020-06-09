import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoModel } from '../../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  crearProducto( producto: ProductoModel ){
    // return this.http.post(`${ this.url }/`);
  }
}
