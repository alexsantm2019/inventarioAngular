import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { catchError, Observable, Subject } from 'rxjs';
import { of as ObservableOf } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  private url = 'http://localhost:8081/api/cliente';

  constructor(private http: HttpClient) {  }


  /* ******************** OBTENGO LA LISTA DE CLIENTES ******************** */
  getClientesService(): any {
    return this.http.get(this.url + '/clients');
  }

  /* ******************** CREO UN NUEVO VINO ******************** */
  createClienteService(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url + '/save', cliente);
  }

  /* ******************** ELIMINO UN CLIENTE ******************** */
    deleteClienteService(id: String ):  any {
      return this.http.delete(this.url + '/delete/'+ id);
    } 
    
  /* ******************** ELIMINO UN CLIENTE ******************** */
  updateClienteService( id:Number, cliente: Cliente ):  any {
    return this.http.put(this.url + '/update/'+ id, cliente);
  }     


}