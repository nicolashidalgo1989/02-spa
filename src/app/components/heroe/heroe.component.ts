import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})

export class HeroeComponent {

  heroe:any = {};

  constructor( private _heroeRuta:ActivatedRoute, private _heroeServicio:HeroesService ) { 

    this._heroeRuta.params.subscribe( params => {
 
      this.heroe = this._heroeServicio.getHeroe( params['id'] ); 
    
    }); 

  }
 
}
