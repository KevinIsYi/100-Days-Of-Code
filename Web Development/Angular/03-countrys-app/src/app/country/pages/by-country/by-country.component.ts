import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  public term: string = 'Hey';

  constructor(private countryService: CountryService) { }

  find() {
    this.countryService.searchCountry(this.term)
      .subscribe(response => {
        console.log(response);
      })
  }
}
