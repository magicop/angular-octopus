import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Soluciones',
      icono: 'mdi mdi-settings',
      submenu: [
        { titulo: 'Ver soluciones', url: '/soluciones' }
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
      titulo: 'Empresa',
      icono: 'mdi mdi-settings',
      submenu: [
        { titulo: 'Ver empresas', url: '/empresas' }
      ]
    }
  ];

  constructor() { }

}
