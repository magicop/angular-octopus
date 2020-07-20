import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaComponent } from '../../empresa/empresa/empresa.component';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import { EmpresaModel } from '../../../models/empresa.model';
import swal from 'sweetalert';


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html'
})
export class EmpresasComponent implements OnInit {

  empresas: EmpresaModel[] = [];

  constructor(
    private empresasService: EmpresaService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.empresas = null;
    this.empresasService.getEmpresas()
        .subscribe( (resp: EmpresaModel[]) => {
          this.empresas = resp;
          // console.log(this.productos[0].id);
        });
  }

  borrarEmpresa( empresa: EmpresaModel ){

    swal({
      title: '¿Estás seguro?',
      text: 'Desactivarás la empresa seleccionado',
      icon: 'warning',
      buttons: ['No', 'Si'],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.empresasService.borrarEmpresa( empresa._id ).subscribe();

        swal('Has desactivado la empresa', {
          icon: 'success',
        });
        this.ngOnInit();
        // this.router.navigate(['/dashboard']);

      } else {
      }
    });
  }

  activarEmpresa( empresa: EmpresaModel ){

    swal({
      title: '¿Estás seguro?',
      text: 'Activarás la empresa seleccionada',
      icon: 'warning',
      buttons: ['No', 'Si'],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.empresasService.activarEmpresa( empresa._id ).subscribe();

        swal('Has activado la empresa', {
          icon: 'success',
        });

        this.ngOnInit();
        // this.router.navigate(['/dashboard']);

      } else {
        swal('Se ha generado un error', {
          icon: 'danger',
        });

        this.ngOnInit();
      }
    });
  }

}
