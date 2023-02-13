import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdenesListaComponent } from './ordenes-lista/ordenes-lista.component';

const routes: Routes = [
  { path: 'listaOrdenes', component: OrdenesListaComponent},
//   { path: 'Nuevo', component: VinoNuevoComponent},
//   { path: 'Detalle/:id', component: VinoDetalleComponent,
//     canActivate: [AuthGuard], resolve: { stock: VinoLoadResolverService } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenesRoutingModule { }