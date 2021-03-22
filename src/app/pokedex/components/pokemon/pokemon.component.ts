import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  public pokemon: Pokemon;
  public imageSource: string;

  constructor(
    private pokemonApiService: PokemonApiService,
    private thisRoute : ActivatedRoute
  ) { 
    thisRoute.params.subscribe( param => {
      pokemonApiService.getPokemonByNumber(param.num).subscribe(resp => {
        this.pokemon = resp;        
      })
    })
  }

  ngOnInit() {
    this.setDefaultImage();
  }

  public setDefaultImage() : void {
    this.imageSource = this.pokemon.sprites.other['official-artwork'].front_default;
  }

}
