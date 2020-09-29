import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private PATH_BASE = `${environment.url_api}/pokemon`;
  constructor(private httpClient: HttpClient) {}

  getAllPokemon(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(
      `${this.PATH_BASE}`
    );
  }

  getPokemon(id: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.PATH_BASE}/${id}`);
  }

  createPokemon(produtc: Pokemon): Observable<Pokemon> {
    return this.httpClient.post<Pokemon>(`${this.PATH_BASE}`, produtc);
  }

  updatePokemon(id: string, changes: Partial<Pokemon>): Observable<Pokemon> {
    return this.httpClient.put<Pokemon>(`${this.PATH_BASE}/${id}`, changes);
  }

  deletePokemon(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.PATH_BASE}/${id}`);
  }
}
