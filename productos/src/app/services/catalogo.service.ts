import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private http: HttpClient) {
    console.log('Servicio Listo');
  }

  // tslint:disable-next-line: typedef
  getNewReleases() {
    return this.http.get('https://fvwzxk56cg.execute-api.us-east-1.amazonaws.com/mock/productos')
      .pipe( map( data =>  data ));
  }

  // tslint:disable-next-line: typedef
  getPedido( idProducto: string) {
    return this.http.get(`https://fvwzxk56cg.execute-api.us-east-1.amazonaws.com/mock/productos/${idProducto}`);
  }

}
