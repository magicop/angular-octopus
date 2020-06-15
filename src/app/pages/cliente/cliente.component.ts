import { Component, OnInit } from '@angular/core';
import { ClienteModel } from '../../models/cliente.model';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../../services/cliente/cliente.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: [
  ]
})
export class ClienteComponent implements OnInit {
  cliente: ClienteModel = new ClienteModel();

  constructor( private clienteService: ClienteService ) { }

  ngOnInit(): void {
  }

  guardar( form: NgForm ){
    if (form.invalid) {
      console.log('Formulario on válido');
      return;
    }

    if (this.cliente._id) {
      this.clienteService.actualizarCliente(this.cliente)
        .subscribe( resp => {
          console.log(resp);
        });
    } else {
      this.clienteService.crearCliente(this.cliente)
        .subscribe( resp => {
          console.log(resp);
        });
    }
  }

}
