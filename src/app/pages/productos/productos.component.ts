import { Component, OnInit } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { ProductosService } from '../../services/productos/productos.service';
import { ProductoModel } from '../../models/producto.model';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  productos: ProductoModel[] = [];
  cargando = true;

  constructor(
    private productosService: ProductosService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.productos = null;
    this.cargando = true;
    this.productosService.getProductos()
        .subscribe( (resp: ProductoModel[]) => {
          this.productos = resp;
          this.cargando = false;
          // console.log(this.productos[0].id);
        });
  }

  borrarProducto( producto: ProductoModel ){

    swal({
      title: '¿Estás seguro?',
      text: 'Desactivarás el producto seleccionado',
      icon: 'warning',
      buttons: ['No', 'Si'],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.productosService.borrarProducto( producto._id ).subscribe();

        swal('Has desactivado el producto', {
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

  activarProducto( producto: ProductoModel ){

    swal({
      title: '¿Estás seguro?',
      text: 'Activarás el producto seleccionado',
      icon: 'warning',
      buttons: ['No', 'Si'],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.productosService.activarProducto( producto._id ).subscribe();

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
