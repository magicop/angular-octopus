import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Productos',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Producto', url: '/productos' }
      ]
    }
  ];

  constructor() { }

}
