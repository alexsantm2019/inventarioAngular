import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Orden } from 'src/app/model/Orden';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { ClienteService } from '../../../services/clientes.service';
@Component({
  selector: 'app-ordenes-crear',
  templateUrl: './ordenes-crear.component.html',
  styleUrls: ['./ordenes-crear.component.scss']
})
export class OrdenesCrearComponent {

  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private ordenService: OrdenesService,
    private clienteService: ClienteService
  ) {
    this.createForm();
  }

  public clientes: any =[];
  public message = '';
  public orden!: FormGroup;

  public editMode: Boolean=false;
  public createMode: Boolean=true;
  public ordenIdEditado: Number=0;

  @Output() private ordenCreada: EventEmitter<Orden> = new EventEmitter();
  @Output() private ordenActualizada: EventEmitter<Orden> = new EventEmitter();
  @Input() ordenEditada!: Orden;

  ngOnChanges(ordenEditada: Orden) {      
    if(Boolean(this.ordenEditada) || this.ordenEditada){
      console.log("1. Modo edit ON")
      this.editMode = true;
      this.createMode = false;
      this.setOrdenToEdit(this.ordenEditada);
    }else{
      console.log("2. Modo crear ON")
      this.editMode = false;
      this.createMode = true;
    }
}

  ngOnInit() {
    this.getClientes();

  }

  
  get f() {
    return this.orden.controls;
  }


  getClientes(){
    this.clienteService.getClientesService()
    .subscribe((item: any) =>this.clientes = item); 
  }

  setOrdenToEdit(ordenEditada: Orden){
    this.ordenIdEditado = ordenEditada.id;
    this.orden = this.formBuilder.group({
      fecha: ordenEditada.fecha,
      codigo: ordenEditada.codigo,
      clienteId: ordenEditada.clienteId,
    });
  }

  createForm() {
    this.orden = this.formBuilder.group({
      fecha: [
        null,
        Validators.compose([Validators.required]),
      ],
      codigo: [
        null,
        Validators.compose([Validators.required]),
      ],
      clienteId: [
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

  createOrden() {
    if (this.orden.valid) {

      const orden: Orden = this.orden.value;
      this.ordenService.createOrdenService(orden).subscribe(
        (res) => {
          this.message = 'Orden agregado correctamente';
          console.log('Triggered event emitter');
          //this.clienteCreado.next();
          this.ordenCreada.emit(orden);
          this.cleanForm();
        },
        (err) => {
          this.message = 'Unable to create vino, please try again.';
        }
      );
    } else {
      this.validateAllFormFields(this.orden); // llamado a función para validar una vez hecho Submit
      console.error('vino form is in an invalid state');
    }
  }

  editOrden(){
    if (this.orden.valid) {

      const orden: Orden = this.orden.value;
      this.ordenService.updateOrdenService(this.ordenIdEditado, orden).subscribe(
        () => {
          this.message = 'Cliente actualizado correctamente';

          this.ordenActualizada.emit(orden);
          this.setCreateMode();
        },
        () => {
          this.message = 'Unable to create vino, please try again.';
        }
      );
    } else {
      this.validateAllFormFields(this.orden); // llamado a función para validar una vez hecho Submit
      console.error('vino form is in an invalid state');
    }
  }

  cleanForm(){
    this.orden = this.formBuilder.group({
      fecha: "",
      codigo: "",
      clienteId: "",
    });
  }
  setCreateMode(){
    this.editMode = false;
    this.createMode = true;
    this.cleanForm();
  }




}
