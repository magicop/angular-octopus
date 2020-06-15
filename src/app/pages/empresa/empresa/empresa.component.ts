import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpresaModel } from '../../../models/empresa.model';
import { EmpresaService } from '../../../services/empresa/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html'
})
export class EmpresaComponent implements OnInit {

  empresa: EmpresaModel = new EmpresaModel();

  constructor( private empresaService: EmpresaService ) { }

  ngOnInit(): void {
  }

  guardar( form: NgForm ){
    if (form.invalid) {
      console.log('Formulario on válido');
      return;
    }

    if (this.empresa._id) {
      this.empresaService.actualizarEmpresa(this.empresa)
        .subscribe( resp => {
          console.log(resp);
        });
    } else {
      this.empresaService.crearEmpresa(this.empresa)
        .subscribe( resp => {
          console.log(resp);
        });
    }
  }

}
