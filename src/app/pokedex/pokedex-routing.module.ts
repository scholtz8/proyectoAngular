import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';


const routes: Routes = [
  { path:'', children:[
    { path: 'pokemonList', component:PokemonListComponent,
      children: [
        {path: 'pokemonCard/:num', component:PokemonCardComponent}
      ]
    },
    { path: 'pokemon/:num', component:PokemonComponent},
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
