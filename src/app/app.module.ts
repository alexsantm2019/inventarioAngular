import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Modulos
import { ClientesModule } from './views/clientes/clientes.module';
import { OrdenesModule } from './views/ordenes/ordenes.module';
import { ArticulosModule } from './views/articulos/articulos.module';
import { FooterComponent } from './views/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClientesModule,
    OrdenesModule,
    ArticulosModule
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [NavbarComponent],
})
export class AppModule { }
