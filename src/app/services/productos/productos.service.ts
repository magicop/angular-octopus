import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoModel } from '../../models/producto.model';
import { map, delay } from 'rxjs/operators';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  crearProducto( producto: ProductoModel ){
    return this.http.post(`${ this.url }/productos`, producto)
            .pipe(
              map( (resp: any) => {
                producto._id = resp.id;
                swal('Éxito', 'Se ha agregado el nuevo producto', 'success');
                return this.router.navigate(['/productos']);
              })
            );
  }

  borrarProducto( id: string ){
    return this.http.delete(`${ this.url }/producto/${ id }`);
  }

  activarProducto( id: string ){
    return this.http.delete(`${ this.url }/activarProd/${ id }`);
  }

  actualizarProducto( producto: ProductoModel){
    return this.http.put(`${ this.url }/productos/${ producto._id }`, producto);
  }

  getProductos(){
    return this.http.get(`${ this.url }/productos/`)
                .pipe(
                  map( this.crearArreglo ),
                  delay(1500)
                );
  }

  private crearArreglo(productosObj: object){
    const productos: ProductoModel[] = [];
    if ( productosObj === null ){
      return [];
    }

    Object.keys(productosObj).forEach( (key, i) => {
      const producto: ProductoModel = productosObj[key];
      productos.push(producto);
    });

    return productos[0];
  }
}