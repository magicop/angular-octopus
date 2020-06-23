import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string): any {

    let url = URL_SERVICIOS + '/img';

    if (!img) {
      return url + '/clientes/xxx';
    }

    switch ( tipo )
    {
      case 'clientes':
        return url + '/clientes/' + img;
        break;
      case 'productos':
        return url + '/productos/' + img;
        break;
      default:
        console.log('Tipo no existe');
        return url + '/clientes/xxx';

    }
  }

}
