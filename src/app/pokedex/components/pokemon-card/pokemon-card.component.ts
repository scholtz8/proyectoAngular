import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  
  public num: number;
  public pokemon: Pokemon;
  public imageSource: string;

  constructor(
    private pokemonApiService: PokemonApiService,
    private thisRoute : ActivatedRoute
    ) { 

  }

  ngOnInit() {
    this.thisRoute.params.subscribe(param => {
      this.pokemonApiService.getPokemonByNumber(param.num).subscribe(resp => {
        this.pokemon = resp; 
        this.imageSource = this.pokemon.sprites['front_default'];       
      })
     })
  }


}
