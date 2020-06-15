import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Productos',
      icono: 'mdi mdi-settings',
      submenu: [
        { titulo: 'Ver productos', url: '/productos' }
      ]
    },
    {
      titulo: 'Clientes',
      icono: 'mdi mdi-settings',
      submenu: [
        { titulo: 'Ver clientes', url: '/clientes' }
      ]
    },
    {
      titulo: 'Empresas',
      icono: 'mdi mdi-settings',
      submenu: [
        { titulo: 'Ver empresas', url: '/empresas' }
      ]
    }
  ];

  constructor() { }

}
