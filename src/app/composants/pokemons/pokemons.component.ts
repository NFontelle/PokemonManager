import {Component, OnInit} from '@angular/core';
import {AffichageService} from '../../service/affichage.service';
import {Pokemon} from '../../modele/pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: Array<Pokemon>;
  compteur: number;
  p;

  constructor(private affichageService: AffichageService) {
  }

  ngOnInit() {
    this.importPokemon();
  }

  importPokemon() {
    this.pokemons = this.affichageService.getPokemon();
    this.compteur = this.affichageService.cpt();
  }

  envoyer(nomCherche) {
    this.pokemons = this.affichageService.triPokemon(nomCherche);
  }

  reinitRecherche(){
    this.pokemons = this.affichageService.getPokemon();
  }

}
