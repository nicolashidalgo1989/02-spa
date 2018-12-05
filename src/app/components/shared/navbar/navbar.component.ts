import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'

})

export class NavbarComponent implements OnInit {

  constructor( private _heroesRouter:Router ) { }

  ngOnInit() {
  } 
  
  buscarHeroe(termino:string){ 
    
    if ( termino.length > 1) { 

      this._heroesRouter.navigate( [ '/buscar', termino ]);
    
    } else {

      return false;
    
    }

  }

}
