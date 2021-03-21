import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  public pokemonList: Pokemon[];

  constructor(
    private pokemonApiService: PokemonApiService
  ) {
      pokemonApiService.getPokemonList(150,1).subscribe(resp => {
        console.log(resp);
        this.pokemonList = resp.results;
      });
  }

  ngOnInit() {
    console.log('POKEMON LIST',this.pokemonList);
  }

}
