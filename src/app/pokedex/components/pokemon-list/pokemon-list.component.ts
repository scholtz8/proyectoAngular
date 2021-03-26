import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  public pokemonList: PokeColumn[] = [];
  public displayedColumns: string[] = ['position', 'name'];
  public dataSource = new MatTableDataSource<PokeColumn>(this.pokemonList);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;


  public namePokemon: string;
  public numberPokemon: number;
  public imagePokemon: string;
  imgModel = 'front_default';

  
  constructor(
    private pokemonApiService: PokemonApiService
  ) {
    this.getPokemonList(150,1);
  }

  ngOnInit() {
      this.dataSource.sort = this.sort;      
  }

  ngAfterView() {
    this.dataSource.sort = this.sort;
  }

  getPokemonList(limit: number, offset: number){
    for(let i=offset; i<=limit; i++){
      this.pokemonApiService.getPokemonByNumber(i).subscribe(
        res => {
          this.pokemonList.push(new PokeColumn(i, res.name));
          this.dataSource = new MatTableDataSource<PokeColumn>(this.pokemonList);
          this.dataSource.paginator = this.paginator;
        }
      )
    }
  }  
}



export class PokeColumn {
  constructor(public position: number, public name: string) {
  }
}
