import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../../models/producto.model';
import { NgForm } from '@angular/forms';
import { ProductosService } from '../../services/productos/productos.service';
import swal from 'sweetalert';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: [
  ]
})
export class ProductoComponent implements OnInit {

  producto: ProductoModel = new ProductoModel();

  constructor( private productosService: ProductosService,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {

      this.productosService.getProducto( id )
        .subscribe( (resp: ProductoModel) => {
          this.producto = resp;
          this.producto._id = id;

          console.log(this.producto);
        });

    }
  }

  guardar( form: NgForm ){
    if (form.invalid) {
      return;
    }

    if (this.producto._id) {

      swal({
        title: '¿Estás seguro?',
        text: 'Modificarás los datos de empresa',
        icon: 'warning',
        buttons: ['No', 'Si'],
        dangerMode: true,
      })
      .then((willDelete) => {
        if (!this.producto.activo){
          this.producto.activo = true;
        }else{
          this.producto.activo = false;
        }

        if (willDelete) {
          this.productosService.actualizarProducto(this.producto)
                                .subscribe();
          swal('Has modificado los datos', {
            icon: 'success',
          });
          this.router.navigate(['/productos']);
        } else {
        }
      });

    } else {
      this.productosService.crearProducto(this.producto)
        .subscribe();
    }
  }

}
