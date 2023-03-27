import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Orden } from 'src/app/model/Orden';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { ClienteService } from '../../../services/clientes.service';
import { ArticulosService } from 'src/app/services/articulos.service';
import { Articulo } from 'src/app/model/Articulo';

@Component({
  selector: 'app-articulos-crear',
  templateUrl: './articulos-crear.component.html',
  styleUrls: ['./articulos-crear.component.scss']
})
export class ArticulosCrearComponent {

  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private articuloService: ArticulosService,
    private ordenService: OrdenesService
  ) {
    this.createForm();
  }

  public ordenes: any =[];
  public message = '';
  public articulo!: FormGroup;

  public editMode: Boolean=false;
  public createMode: Boolean=true;
  public articuloIdEditado: Number=0;

  @Output() private articuloCreado: EventEmitter<Articulo> = new EventEmitter();
  @Output() private articuloActualizado: EventEmitter<Articulo> = new EventEmitter();
  @Input() articuloEditado!: Articulo;

  ngOnChanges(articuloEditado: Articulo) {      
    if(Boolean(this.articuloEditado) || this.articuloEditado){
      console.log("1. Modo edit ON")
      this.editMode = true;
      this.createMode = false;
      this.setArticuloToEdit(this.articuloEditado);
      this.message = "";
    }else{
      console.log("2. Modo crear ON")
      this.editMode = false;
      this.createMode = true;
      this.message = "";
    }
}

  ngOnInit() {
    this.getOrdenes();

  }

  
  get f() {
    return this.articulo.controls;
  }


  getOrdenes(){
    this.ordenService.getOrdenesService()
    .subscribe((item: any) =>this.ordenes = item); 
  }

  setArticuloToEdit(articuloEditado: Articulo){
    this.articuloIdEditado = articuloEditado.id;
    this.articulo = this.formBuilder.group({
      nombre: articuloEditado.nombre,
      codigo: articuloEditado.codigo,
      precioUnitario: articuloEditado.precioUnitario,
      ordenId: articuloEditado.ordenId,
    });
  }

  createForm() {
    this.articulo = this.formBuilder.group({
      nombre: [
        null,
        Validators.compose([Validators.required]),
      ],
      codigo: [
        null,
        Validators.compose([Validators.required]),
      ],
      precioUnitario: [
        null,
        Validators.compose([Validators.required]),
      ],
      ordenId: [
        null,
        Validators.compose([Validators.required]),
      ],
    });
  }  
  //Función para validar formulario en caso de hacer submit
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }  

  createArticulo() {
    if (this.articulo.valid) {

      const articulo: Articulo = this.articulo.value;
      this.articuloService.createArticuloService(articulo).subscribe(
        () => {
          this.message = 'Artículo agregado correctamente';
          console.log('Triggered event emitter');
          //this.clienteCreado.next();
          this.articuloCreado.emit(articulo);
          this.cleanForm();
        },
        () => {
          this.message = 'Unable to create vino, please try again.';
        }
      );
    } else {
      this.validateAllFormFields(this.articulo); // llamado a función para validar una vez hecho Submit
      console.error('form is in an invalid state');
    }
  }

  editArticulo(){
    if (this.articulo.valid) {

      const articulo: Articulo = this.articulo.value;
      this.articuloService.updateArticuloService(this.articuloIdEditado, articulo).subscribe(
        () => {
          this.message = 'Artículo actualizado correctamente';

          this.articuloActualizado.emit(articulo);
          this.setCreateMode();
        },
        () => {
          this.message = 'Unable to create artículo, please try again.';
        }
      );
    } else {
      this.validateAllFormFields(this.articulo); // llamado a función para validar una vez hecho Submit
      console.error('form is in an invalid state');
    }
  }

  cleanForm(){
    this.articulo = this.formBuilder.group({
      nombre: "",
      codigo: "",
      precioUnitario: "",
      ordenId: "",
    });
  }
  setCreateMode(){
    this.editMode = false;
    this.createMode = true;
    this.cleanForm();
  }

}
