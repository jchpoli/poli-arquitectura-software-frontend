import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule], // Exportable para que otros modulos lo puedan utilizar
})
export class PokemonsRoutingModule {}
