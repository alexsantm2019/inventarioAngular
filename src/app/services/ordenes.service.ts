import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { catchError, Observable, Subject } from 'rxjs';
import { of as ObservableOf } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Orden } from '../model/Orden';

@Injectable({
  providedIn: 'root',
})
export class OrdenesService {

  private url = 'http://localhost:8081/api/orden';

  constructor(private http: HttpClient) {  }


  /* ******************** OBTENGO LA LISTA DE CLIENTES ******************** */
  getOrdenesService(): any {
    return this.http.get(this.url + '/ordenes');
  }

  /* ******************** CREO UN NUEVO VINO ******************** */
  createOrdenService(orden: Orden): Observable<Orden> {
    return this.http.post<Orden>(this.url + '/save', orden);
  }

  /* ******************** ELIMINO UN CLIENTE ******************** */
    deleteOrdenService(id: String ):  any {
      return this.http.delete(this.url + '/delete/'+ id);
    } 
    
  /* ******************** ELIMINO UN CLIENTE ******************** */
  updateOrdenService( id:Number, orden: Orden ):  any {
    return this.http.put(this.url + '/update/'+ id, orden);
  }     


}