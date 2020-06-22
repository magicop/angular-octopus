import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { EmpresaModel } from '../../models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private url = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  crearEmpresa( empresa: EmpresaModel ){
    return this.http.post(`${ this.url }/empresas`, empresa)
            .pipe(
              map( (resp: any) => {
                empresa._id = resp.id;
                swal('Éxito', 'Se ha agregado la nueva empresa', 'success');
                return this.router.navigate(['/empresas']);
              })
            );
  }

  borrarEmpresa( id: string ){
    return this.http.delete(`${ this.url }/empresa/${ id }`);
  }

  activarEmpresa( id: string ){
    return this.http.delete(`${ this.url }/activarEmpresa/${ id }`);
  }

  actualizarEmpresa( empresa: EmpresaModel){
    return this.http.put(`${ this.url }/empresas/${ empresa._id }`, empresa);
  }

  getEmpresas(){
    return this.http.get(`${ this.url }/empresas/`)
                .pipe(
                  map( this.crearArreglo )
                );
  }

  private crearArreglo(empresasObj: object){
    const empresas: EmpresaModel[] = [];
    if ( empresasObj === null ){
      return [];
    }

    Object.keys(empresasObj).forEach( (key, i) => {
      const empresa: EmpresaModel = empresasObj[key];
      empresas.push(empresa);
    });

    return empresas[0];
  }

}
