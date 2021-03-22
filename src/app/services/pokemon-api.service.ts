import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  pokemonApiUrl;

  constructor(private httpClient: HttpClient) { 
    this.pokemonApiUrl = environment.pokeApiEndpoint;
  }

  getPokemonByNumber(num: number): Observable<Pokemon>{
    return this.httpClient.get<any>(environment.pokeApiEndpoint + 'pokemon/'+ num + '/');
  }
  
}
