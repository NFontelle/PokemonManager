import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() unObjPokemon;
  image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  @Output() clickPoke = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  clickOnPoke() {
    console.log('clik ok')
    this.clickPoke.emit(this.unObjPokemon);
  }
}
