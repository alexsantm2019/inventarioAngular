import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { catchError, Observable, Subject } from 'rxjs';
import { of as ObservableOf } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Articulo } from '../model/Articulo';

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {

  private url = 'http://localhost:8081/api/articulo';

  constructor(private http: HttpClient) {  }


  /* ******************** OBTENGO LA LISTA DE CLIENTES ******************** */
  getArticulosService(): any {
    return this.http.get(this.url + '/articulos');
  }

  /* ******************** CREO UN NUEVO VINO ******************** */
  createArticuloService(articulo: Articulo): Observable<Articulo> {
    return this.http.post<Articulo>(this.url + '/save', articulo);
  }

  /* ******************** ELIMINO UN CLIENTE ******************** */
    deleteArticuloService(id: String ):  any {
      return this.http.delete(this.url + '/delete/'+ id);
    } 
    
  /* ******************** ELIMINO UN CLIENTE ******************** */
  updateArticuloService( id:Number, articulo: Articulo ):  any {
    return this.http.put(this.url + '/update/'+ id, articulo);
  }     


}