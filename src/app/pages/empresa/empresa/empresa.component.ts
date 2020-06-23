import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpresaModel } from '../../../models/empresa.model';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html'
})
export class EmpresaComponent implements OnInit {

  empresa: EmpresaModel[] = [];

  constructor( private empresaService: EmpresaService, public router: Router ) { }

  ngOnInit(): void {
    this.empresaService.getEmpresas()
        .subscribe( (resp: EmpresaModel[]) => {
          this.empresa = resp;
        });
  }

  modificar( form: NgForm ){
    if (form.invalid) {
      return;
    }
    swal({
      title: '¿Estás seguro?',
      text: 'Modificarás los datos de empresa',
      icon: 'warning',
      buttons: ['No', 'Si'],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        if (this.empresa[0]._id) {
          this.empresaService.actualizarEmpresa(this.empresa[0])
            .subscribe();
        }

        swal('Has modificado los datos', {
          icon: 'success',
        });

        this.router.navigate(['/empresas']);

      } else {
      }
    });
  }

}
