import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { FormsModule } from '@angular/forms';
import { GifsService } from './services/gifs.service';

@NgModule({
  declarations: [GifsPageComponent, SearchComponent, ResultsComponent],
  imports: [CommonModule, FormsModule],
  exports: [GifsPageComponent, SearchComponent, ResultsComponent],
})
export class GifsModule {}
