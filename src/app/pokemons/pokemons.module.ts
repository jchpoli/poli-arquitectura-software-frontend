import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsRoutingModule } from './pokemons-routing.module';

import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [PokemonListComponent, PokemonComponent],
  imports: [CommonModule, PokemonsRoutingModule, MaterialModule],
})
export class PokemonsModule {}
