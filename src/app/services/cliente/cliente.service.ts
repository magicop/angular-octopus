import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { ClienteModel } from '../../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  crearCliente( cliente: ClienteModel ){
    return this.http.post(`${ this.url }/clientes`, cliente)
            .pipe(
              map( (resp: any) => {
                cliente._id = resp.id;
                swal('Éxito', 'Se ha agregado el nuevo cliente', 'success');
                return this.router.navigate(['/clientes']);
              })
            );
  }

  borrarCliente( id: string ){
    return this.http.delete(`${ this.url }/cliente/${ id }`);
  }

  activarCliente( id: string ){
    return this.http.delete(`${ this.url }/activarCliente/${ id }`);
  }

  actualizarCliente( cliente: ClienteModel){
    return this.http.put(`${ this.url }/clientes/${ cliente._id }`, cliente);
  }

  getClientes(){
    return this.http.get(`${ this.url }/clientes/`)
                .pipe(
                  map( this.crearArreglo ),
                  delay(1500)
                );
  }

  getCliente( id: string ) {
    return this.http.get(`${ this.url }/cliente/${ id }`);
  }

  private crearArreglo(clientesObj: object){
    const clientes: ClienteModel[] = [];
    if ( clientesObj === null ){
      return [];
    }

    Object.keys(clientesObj).forEach( (key, i) => {
      const cliente: ClienteModel = clientesObj[key];
      clientes.push(cliente);
    });

    return clientes[0];
  }


}
