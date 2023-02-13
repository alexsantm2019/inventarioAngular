import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable,  Subject} from 'rxjs';
import { map } from 'rxjs/operators';
import { debounceTime, switchMap,
  distinctUntilChanged, startWith,
  share, merge } from 'rxjs/operators';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteService } from '../../../services/clientes.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.scss']
})
export class ClientesListaComponent {

  public clientes: any =[];
  private searchTerms: Subject<string> = new Subject();
  private reloadListaClientes: Subject<void> = new Subject();
  public searchString: string = '';
  
  public clienteCreado:Boolean = false;
  public clienteActualizado:Boolean = false;
  public clienteEditado!: Cliente;

  constructor( private clienteService: ClienteService) {}

  ngOnInit() {
     this.getClientes();
  }

  onCreate() {
    this.reloadListaClientes.next();
  }

  getClientes(){
    this.clienteService.getClientesService()
    .subscribe((item: any) =>this.clientes = item); 
  }

  deleteCliente(id:String ){
    this.clienteService.deleteClienteService(id)
    .subscribe(
      (response: any) => {      
            this.getClientes();
      }, 
      (error: any) => {
          console.log("Error" + JSON.stringify(error))
      }) 
  }

  editCliente(cliente:Cliente ){
    this.clienteEditado = cliente;
  }

  receiveMessageFromCreate($event: any) {
    this.clienteCreado = $event
    if(this.clienteCreado)   this.getClientes();
  }

  receiveMessageFromEdit($event: any) {
    this.clienteActualizado = $event
    if(this.clienteActualizado)   this.getClientes();
  }

  



}
