import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenesListaComponent } from './ordenes-lista/ordenes-lista.component';
import { OrdenesRoutingModule } from './ordenes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdenesCrearComponent } from './ordenes-crear/ordenes-crear.component';
import { OrdenesItemComponent } from './ordenes-item/ordenes-item.component';

@NgModule({
  declarations: [
    OrdenesListaComponent,
    OrdenesCrearComponent,
    OrdenesItemComponent
  ],
  imports: [
    CommonModule,
    OrdenesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OrdenesModule { }
