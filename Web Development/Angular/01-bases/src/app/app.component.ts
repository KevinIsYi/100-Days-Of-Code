import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// template: `
//   <h1>HOli</h1>
// `

export class AppComponent {
  public title  : string = 'Contador App';
  public number : number = 0;
  public base   : number = 5;

  sum(val: number) {
    this.number += val;
  }
}
