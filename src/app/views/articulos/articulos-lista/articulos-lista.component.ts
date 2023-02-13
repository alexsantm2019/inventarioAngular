import { Component } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Articulo } from 'src/app/model/Articulo';
import { ArticulosService } from 'src/app/services/articulos.service';
@Component({
  selector: 'app-articulos-lista',
  templateUrl: './articulos-lista.component.html',
  styleUrls: ['./articulos-lista.component.scss']
})
export class ArticulosListaComponent {

  public articulos: any =[];
  private searchTerms: Subject<string> = new Subject();
  private reloadListaArticulos: Subject<void> = new Subject();
  public searchString: string = '';
  
  public articuloCreado:Boolean = false;
  public articuloActualizado:Boolean = false;
  public articuloEditado!: Articulo;

  constructor( private articuloService: ArticulosService) {}

  ngOnInit() {
     this.getArticulos();
  }

  onCreate() {
    this.reloadListaArticulos.next();
  }

  getArticulos(){
    this.articuloService.getArticulosService()
    .subscribe((item: any) =>this.articulos = item); 
  }

  deleteArticulo(id:String ){
    this.articuloService.deleteArticuloService(id)
    .subscribe(
      (response: any) => {      
            this.getArticulos();
      }, 
      (error: any) => {
          console.log("Error" + JSON.stringify(error))
      }) 
  }

  editArticulo(articulo:Articulo ){
    this.articuloEditado = articulo;
  }

  receiveMessageFromCreate($event: any) {
    this.articuloCreado = $event
    if(this.articuloCreado)   this.getArticulos();
  }

  receiveMessageFromEdit($event: any) {
    this.articuloActualizado = $event
    if(this.articuloActualizado)   this.getArticulos();
  }


}
