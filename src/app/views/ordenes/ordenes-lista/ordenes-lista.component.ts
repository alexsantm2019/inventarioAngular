import { Component } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Orden } from 'src/app/model/Orden';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-ordenes-lista',
  templateUrl: './ordenes-lista.component.html',
  styleUrls: ['./ordenes-lista.component.scss']
})
export class OrdenesListaComponent {

  public ordenes: any =[];
  private searchTerms: Subject<string> = new Subject();
  private reloadListaOrdenes: Subject<void> = new Subject();
  public searchString: string = '';
  
  public ordenCreada:Boolean = false;
  public ordenActualizada:Boolean = false;
  public ordenEditada!: Orden;

  constructor( private ordenService: OrdenesService) {}

  ngOnInit() {
     this.getOrdenes();
  }

  onCreate() {
    this.reloadListaOrdenes.next();
  }

  getOrdenes(){
    this.ordenService.getOrdenesService()
    .subscribe((item: any) =>this.ordenes = item); 
  }

  deleteOrden(id:String ){
    this.ordenService.deleteOrdenService(id)
    .subscribe(
      (response: any) => {      
            this.getOrdenes();
      }, 
      (error: any) => {
          console.log("Error" + JSON.stringify(error))
      }) 
  }

  editOrden(orden:Orden ){
    this.ordenEditada = orden;
  }

  receiveMessageFromCreate($event: any) {
    this.ordenCreada = $event
    if(this.ordenCreada)   this.getOrdenes();
  }

  receiveMessageFromEdit($event: any) {
    this.ordenActualizada = $event
    if(this.ordenActualizada)   this.getOrdenes();
  }



}
