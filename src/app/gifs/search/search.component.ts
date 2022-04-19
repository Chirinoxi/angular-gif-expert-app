import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  // Usamos non-null assertion operator ! (solo de TS) !
  @ViewChild('searchTxt') searchTxt!: ElementRef<HTMLInputElement>;

  stringQuery: string = '';

  constructor(private gifsService: GifsService) {}

  buscar() {
    const inputValue = this.searchTxt.nativeElement.value;

    // Buscamos los gifs utilizando el valor ingresado !
    this.gifsService.searchGifs(inputValue);

    // Re-inicializamos el valor de la caja de texto,
    this.searchTxt.nativeElement.value = '';
    // En caso de usar two way data binding descomentamos la sgte línea:
    // this.stringQuery = '';
  }
}
