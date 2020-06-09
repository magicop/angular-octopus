import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Marcas',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Marca1', url: '/productos' },
        { titulo : 'Marca2', url: '/producto' },
        { titulo: 'Marca3', url: '/graficas1' },
        { titulo: 'Marca4', url: '/promesas' },
        { titulo: 'Marca5', url: '/rxjs' }
      ]
    }
  ];

  constructor() { }

}
