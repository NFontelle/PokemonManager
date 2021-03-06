import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerationsComponent } from './composants/generations/generations.component';
import { PokemonsComponent } from './composants/pokemons/pokemons.component';

import {LOCALE_ID} from '@angular/core';
import  {registerLocaleData} from '@angular/common';
import localFR from '@angular/common/locales/fr';
import { PokemonComponent } from './composants/pokemon/pokemon.component';
import {FormsModule} from '@angular/forms';
import { BarreNavComponent } from './composants/barre-nav/barre-nav.component';
import { PagedAccComponent } from './composants/paged-acc/paged-acc.component';
import { ConnexionComponent } from './composants/connexion/connexion.component';
import { CompteComponent } from './composants/compte/compte.component';
import { Erreur404Component } from './composants/erreur404/erreur404.component';
registerLocaleData(localFR);

@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonsComponent,
    PokemonComponent,
    BarreNavComponent,
    PagedAccComponent,
    ConnexionComponent,
    CompteComponent,
    Erreur404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
