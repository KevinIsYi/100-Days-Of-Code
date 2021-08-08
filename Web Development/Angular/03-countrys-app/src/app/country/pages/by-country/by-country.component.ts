import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  public term: string = 'Hey';

  constructor() { }

  find() {
    console.log(this.term);

  }
}
