import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchGIFResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _history: string[] = [];
  private apiKey: string = 'CD0Yg6IcgOhfF99znxZQFeeocuH1igEw';
  public results: Gif[] = [];

  constructor(private http: HttpClient) {
    // Cargamos desde el local storage el historial registrado !
    this._history = JSON.parse(localStorage.getItem('historial')!) || [];
    this.results = JSON.parse(localStorage.getItem('lastResults')!) || [];
  }

  get history() {
    // Operador spread permite retornar una copia del arreglo original !
    return [...this._history];
  }

  getSpecificUrl(q: string) {
    return `https://api.giphy.com/v1/gifs/search?api_key=${
      this.apiKey
    }&q=${encodeURI(q)}&limit=12`;
  }

  searchGifs(query: string = '') {
    query = query.toLocaleLowerCase();
    if (query.trim().length != 0) {
      if (!this._history.includes(query)) {
        this._history.unshift(query);
        this._history = this._history.splice(0, 15);
        // Almacenamos historial en local storage !
        localStorage.setItem('historial', JSON.stringify(this._history));
      }
      const URL = this.getSpecificUrl(query);
      // Debemos realizar petición HTTP !
      this.http.get<SearchGIFResponse>(URL).subscribe((response) => {
        this.results = response.data;
        localStorage.setItem('lastResults', JSON.stringify(this.results));
        return this.results;
      });
    } else {
      alert('No se puede buscar un texto vacío !');
    }
  }
}
