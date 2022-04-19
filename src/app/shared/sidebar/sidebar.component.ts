import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {

  constructor(private gifsService: GifsService){};

  get historial(){
    return this.gifsService.history;
  }

  searchGifs (query: string){
    return this.gifsService.searchGifs(query);
  }
}
