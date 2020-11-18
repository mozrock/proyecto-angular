import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor( private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getCiudades(){
    return this.http.get('https://www.datos.gov.co/resource/xdk5-pm3f.json')
      .pipe(
        map(( resp: any[] ) => {
          return resp.map( ciudad => {
            return {
              nombreC: ciudad.departamento
            };
          });
        })
      );
  }
}
