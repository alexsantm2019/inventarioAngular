import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

const routes: Routes = [
  { path: 'lista', component: ClientesListaComponent},
//   { path: 'Nuevo', component: VinoNuevoComponent},
//   { path: 'Detalle/:id', component: VinoDetalleComponent,
//     canActivate: [AuthGuard], resolve: { stock: VinoLoadResolverService } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }