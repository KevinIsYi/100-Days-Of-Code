import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  @ViewChild('textFind') textFind!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  public find() {
    const value = this.textFind.nativeElement.value;
    this.gifsService.searchGifs(value);
    this.textFind.nativeElement.value = '';
  }
}
