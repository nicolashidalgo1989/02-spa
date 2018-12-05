import { Component, OnInit } from '@angular/core'; 
import { HeroesService } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html' 
})
export class BuscarComponent implements OnInit {

  heroes:any[] = []; 
  termino:string;

  constructor( private _heroesService:HeroesService, 
               private _activatedroute:ActivatedRoute 
  ) { }

  ngOnInit() { 
  
    this._activatedroute.params.subscribe(params => {
    
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );  
  
    }) 

  }
 
}
