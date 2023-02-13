import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inventario';


  constructor(router:Router) {
    // Default route
    router.navigate(['/clientes/lista']);
  }


}
