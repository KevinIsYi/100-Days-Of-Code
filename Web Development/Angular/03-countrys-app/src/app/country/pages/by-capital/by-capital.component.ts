import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  public term: string = '';
  public hasError: boolean = false;
  public countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  find(term: string) {
    this.term = term;
    this.hasError = false;
    this.countryService.searchCapital(term)
      .subscribe((countries) => {
        this.countries = countries;
      }, (err) => {
        this.countries = [];
        this.hasError = true;
      });
  }

  suggestions(term: string) {
    this.hasError = false;

    console.log(term);

  }

}
