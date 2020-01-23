import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {


  private pokemons = [
    { id : 1, nom : 'Bulbizarre', cathegorie : 'graine', type : ['plante, poison'], taille : 0.70, poid : 6.9},
    { id : 2, nom : 'Herbizarre', cathegorie : 'graine', type : ['plante, poison'], taille : 1.00, poid : 13.0},
    { id : 3, nom : 'Florizarre', cathegorie : 'graine', type : ['plante, poison'], taille : 0.70, poid : 6.9},
    { id : 4, nom : 'Salamèche', cathegorie : 'lézard', type : ['feu'], taille : 0.6, poid : 8.5},
    { id : 5, nom : 'Reptincel', cathegorie : 'lézard', type : ['feu'], taille : 1.1, poid : 19.0},
    { id : 6, nom : 'Dracaufeu', cathegorie : 'flamme', type : ['feu, vol'], taille : 1.70, poid : 90.5}
  ];



  constructor() { }

  ngOnInit() {
  }

}
