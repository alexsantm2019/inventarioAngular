import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticulosListaComponent } from './articulos-lista/articulos-lista.component';
import { ArticulosItemComponent } from './articulos-item/articulos-item.component';
import { ArticulosCrearComponent } from './articulos-crear/articulos-crear.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticulosRoutingModule } from './articulos-routing.module';

@NgModule({
  declarations: [
    ArticulosListaComponent,
    ArticulosItemComponent,
    ArticulosCrearComponent
  ],
  imports: [
    CommonModule,
    ArticulosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ArticulosModule { }
