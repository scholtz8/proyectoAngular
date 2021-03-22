import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material';


@NgModule({
  declarations: [PokemonListComponent, PokemonComponent, PokemonCardComponent],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ]
})
export class PokedexModule { }
