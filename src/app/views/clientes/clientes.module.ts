import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientesCrearComponent } from './clientes-crear/clientes-crear.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClientesCrearComponent,
    ClientesListaComponent,
    ClientesCrearComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
})
export class ClientesModule { }
