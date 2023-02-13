import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticulosListaComponent } from './articulos-lista/articulos-lista.component';

const routes: Routes = [
  { path: 'listaArticulos', component: ArticulosListaComponent},
//   { path: 'Nuevo', component: VinoNuevoComponent},
//   { path: 'Detalle/:id', component: VinoDetalleComponent,
//     canActivate: [AuthGuard], resolve: { stock: VinoLoadResolverService } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticulosRoutingModule { }