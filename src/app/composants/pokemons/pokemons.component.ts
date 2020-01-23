import { Component, OnInit } from '@angular/core';
import {AffichageService} from '../../service/affichage.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons;
  p;


  constructor(private affichageService: AffichageService ) {
  }

  ngOnInit() {
    this.importPokemon();
    this.nbrPokemon();
  }
  importPokemon(){
    this.pokemons = this.affichageService.getPokemon();
  }

  nbrPokemon() {
    return this.pokemons.length;
  }





}
