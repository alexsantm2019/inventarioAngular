import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: 'clientes', loadChildren: () => import('./views/clientes/clientes.module').then(m => m.ClientesModule) },
  { path: 'ordenes', loadChildren: () => import('./views/ordenes/ordenes.module').then(m => m.OrdenesModule) },
  { path: 'articulos', loadChildren: () => import('./views/articulos/articulos.module').then(m => m.ArticulosModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
