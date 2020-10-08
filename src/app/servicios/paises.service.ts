import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private url = environment.urlServicio;

  constructor(private http: HttpClient) { }
  getPaises(){              //region: europe, asia, americas, africa
    console.log('Servicio paises');
    return this.http.get(this.url);
  }
}
