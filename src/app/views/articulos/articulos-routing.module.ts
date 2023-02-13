import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticulosListaComponent } from './articulos-lista/articulos-lista.component';

const routes: Routes = [
  { path: 'listaArticulos', component: ArticulosListaComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticulosRoutingModule { }