import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../../models/producto.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: [
  ]
})
export class ProductoComponent implements OnInit {

  producto: ProductoModel = new ProductoModel();

  constructor() { }

  ngOnInit(): void {
  }

  guardar( form: NgForm ){
    console.log(form);
    console.log(this.producto);
  }

}
