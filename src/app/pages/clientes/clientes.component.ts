import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteComponent } from '../cliente/cliente.component';
import { ClienteService } from '../../services/cliente/cliente.service';
import { ClienteModel } from '../../models/cliente.model';
import swal from 'sweetalert';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: ClienteModel[] = [];
  cargando = true;

  constructor(
    private clientesService: ClienteService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.clientes = null;
    this.cargando = true;
    this.clientesService.getClientes()
        .subscribe( (resp: ClienteModel[]) => {
          this.clientes = resp;
          this.cargando = false;
          // console.log(this.productos[0].id);
        });
  }

  borrarCliente( cliente: ClienteModel ){

    swal({
      title: '¿Estás seguro?',
      text: 'Desactivarás el cliente seleccionado',
      icon: 'warning',
      buttons: ['No', 'Si'],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.clientesService.borrarCliente( cliente._id ).subscribe();

        swal('Has desactivado el cliente', {
          icon: 'success',
        });
        this.ngOnInit();
        // this.router.navigate(['/dashboard']);

      } else {
      }
    });
  }

  activarCliente( cliente: ClienteModel ){

    swal({
      title: '¿Estás seguro?',
      text: 'Activarás el cliente seleccionado',
      icon: 'warning',
      buttons: ['No', 'Si'],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.clientesService.activarCliente( cliente._id ).subscribe();

        swal('Has activado el producto', {
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
