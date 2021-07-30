import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America'];
  public deletedHeroe: string = '';

  public deleteHeroe() {
    this.deletedHeroe = this.heroes.shift() || '';
  }
}
