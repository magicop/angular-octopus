import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../../models/producto.model';
import { NgForm } from '@angular/forms';
import { ProductosService } from '../../services/productos/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: [
  ]
})
export class ProductoComponent implements OnInit {

  producto: ProductoModel = new ProductoModel();

  constructor( private productosService: ProductosService) { }

  ngOnInit(): void {
  }

  guardar( form: NgForm ){
    if (form.invalid) {
      return;
    }

    if (this.producto._id) {
      this.productosService.actualizarProducto(this.producto)
        .subscribe();
    } else {
      this.productosService.crearProducto(this.producto)
        .subscribe();
    }
  }

}
