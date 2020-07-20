import { Component, OnInit } from '@angular/core';
import { ClienteModel } from '../../models/cliente.model';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../../services/cliente/cliente.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: [
  ]
})
export class ClienteComponent implements OnInit {
  cliente: ClienteModel = new ClienteModel();

  constructor( private clienteService: ClienteService,
               private route: ActivatedRoute,
               private router: Router ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {

      this.clienteService.getCliente( id )
        .subscribe( (resp: ClienteModel) => {
          this.cliente = resp;
          this.cliente._id = id;

          // console.log(this.cliente);
        });

    }
  }

  guardar( form: NgForm ){
    if (form.invalid) {
      return;
    }
    if (this.cliente._id) {
      swal({
        title: '¿Estás seguro?',
        text: 'Modificarás los datos de empresa',
        icon: 'warning',
        buttons: ['No', 'Si'],
        dangerMode: true,
      })
      .then((willDelete) => {
        if (!this.cliente.activo){
          this.cliente.activo = true;
        }else{
          this.cliente.activo = false;
        }

        if (willDelete) {
          this.clienteService.actualizarCliente(this.cliente)
                              .subscribe();
          swal('Has modificado los datos', {
            icon: 'success',
          });
          this.router.navigate(['/clientes']);
        } else {
        }
      });
    } else {
      this.clienteService.crearCliente(this.cliente)
        .subscribe();
    }
  }

}
