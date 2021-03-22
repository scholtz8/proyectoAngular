import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
 public num: number;

  constructor(private thisRoute : ActivatedRoute) { 
     thisRoute.params.subscribe(param => {
      this.num = param.num;
     }
     )
  }

  ngOnInit() {
  }

}
