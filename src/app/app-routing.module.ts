import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagedAccComponent} from './composants/paged-acc/paged-acc.component';
import {GenerationsComponent} from './composants/generations/generations.component';
import {PokemonsComponent} from './composants/pokemons/pokemons.component';
import {ConnexionComponent} from './composants/connexion/connexion.component';
import {CompteComponent} from './composants/compte/compte.component';
import {Erreur404Component} from './composants/erreur404/erreur404.component';


const routes: Routes = [
  {path: 'Accueil', component: PagedAccComponent},
  {path: 'Generations', component: GenerationsComponent},
  {path: 'Pokemons', component: PokemonsComponent},
  {path: 'Connexion', component: ConnexionComponent},
  {path: 'CreationCompte', component: CompteComponent},
  {path: '**', component: Erreur404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
