import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../../../core/models/pokemon.model';
import { PokemonService } from '../../../core/services/pokemon.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'generation', 'type'];
  pokemons: Pokemon[];
  mensajeError: string;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.mensajeError = null;
    this.fecthPokemons();
  }

  private fecthPokemons(): void {
    this.pokemonService
      .getAllPokemon()
      .pipe(catchError((error) => {
        this.mensajeError = 'Se presentó un error al consultar los pokemones';
        return [];
      }))
      .subscribe((pokemons) => {
        this.pokemons = pokemons;
      });
  }
}
