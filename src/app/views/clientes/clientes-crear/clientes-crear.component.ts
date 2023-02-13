import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,      
  Validators,
  AbstractControl,
  ValidatorFn,
  
  
  ReactiveFormsModule 
} from '@angular/forms';
import { ClienteService } from '../../../services/clientes.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';

@Component({
  selector: 'app-clientes-crear',
  templateUrl: './clientes-crear.component.html',
  styleUrls: ['./clientes-crear.component.scss']
})
export class ClientesCrearComponent {

  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private clienteService: ClienteService
  ) {
    this.createForm();
  }

  public message = '';
  public cliente!: FormGroup;

  public editMode: Boolean=false;
  public createMode: Boolean=true;
  public clienteIdEditado: Number=0;

  @Output() private clienteCreado: EventEmitter<Cliente> = new EventEmitter();
  @Output() private clienteActualizado: EventEmitter<Cliente> = new EventEmitter();
  @Input() clienteEditado!: Cliente;

  ngOnChanges(clienteEditado: Cliente) {      
    if(Boolean(this.clienteEditado) || this.clienteEditado){
      console.log("1. Modo edit ON")
      this.editMode = true;
      this.createMode = false;
      this.setClientToEdit(this.clienteEditado);
    }else{
      console.log("2. Modo crear ON")
      this.editMode = false;
      this.createMode = true;
    }
}

  ngOnInit() {
   

  }

  
  get f() {
    return this.cliente.controls;
  }

  

  setClientToEdit(clienteEditado: Cliente){
    //console.log("Seteando cliente: " + JSON.stringify(clienteEditado));
    this.clienteIdEditado = clienteEditado.id;
    this.cliente = this.formBuilder.group({
      nombre: clienteEditado.nombre,
      apellido: clienteEditado.apellido,
    });
  }

  createForm() {
    this.cliente = this.formBuilder.group({
      nombre: [
        null,
        Validators.compose([Validators.required]),
      ],
      apellido: [
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

  createCliente() {
    if (this.cliente.valid) {

      const cliente: Cliente = this.cliente.value;
      this.clienteService.createClienteService(cliente).subscribe(
        (res) => {
          this.message = 'Cliente agregado correctamente';
          console.log('Triggered event emitter');
          //this.clienteCreado.next();
          this.clienteCreado.emit(cliente);
          this.cleanForm();
        },
        (err) => {
          this.message = 'Unable to create vino, please try again.';
        }
      );
    } else {
      this.validateAllFormFields(this.cliente); // llamado a función para validar una vez hecho Submit
      console.error('vino form is in an invalid state');
    }
  }

  editCliente(){
    if (this.cliente.valid) {

      const cliente: Cliente = this.cliente.value;
      this.clienteService.updateClienteService(this.clienteIdEditado, cliente).subscribe(
        () => {
          this.message = 'Cliente actualizado correctamente';

          this.clienteActualizado.emit(cliente);
          this.setCreateMode();
        },
        () => {
          this.message = 'Unable to create vino, please try again.';
        }
      );
    } else {
      this.validateAllFormFields(this.cliente); // llamado a función para validar una vez hecho Submit
      console.error('vino form is in an invalid state');
    }
  }

  cleanForm(){
    this.cliente = this.formBuilder.group({
      nombre: "",
      apellido: ""
    });
  }
  setCreateMode(){
    this.editMode = false;
    this.createMode = true;
    this.cleanForm();

  }



}
