import { Component, Input } from '@angular/core';
import { CatalogoService } from '../../services/catalogo.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  @Input() items: any[] = [];
  display = 'none';

  constructor( public catalogo: CatalogoService, private router: Router) {

    this.catalogo.getNewReleases()
        .subscribe( (data: any) => {
            console.log(data);
            this.items = data;
        });
  }

    // tslint:disable-next-line: typedef
    mostarImagen( items: any) {
        Swal.fire({
          html: `<img src="${ items }" >`
          });
      }


      // tslint:disable-next-line: typedef
      verPedido(item: any) {
        let productoId: any;
        productoId = item.idProducto;
        console.log(productoId);

        this.router.navigate([ '/pedido', productoId ]);
      }

}
