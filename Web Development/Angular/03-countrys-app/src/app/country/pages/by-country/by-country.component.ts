import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  public term: string = '';
  public hasError: boolean = false;
  public countries: Country[] = [];
  public suggestedCountries: Country[] = [];

  constructor(private countryService: CountryService) { }

  find(term: string) {
    this.term = term;
    this.hasError = false;
    this.countryService.searchCountry(term)
      .subscribe((countries) => {
        this.countries = countries;
      }, (err) => {
        this.countries = [];
        this.hasError = true;
      });
  }

  suggestions(term: string) {
    this.hasError = false;
    this.term = term;

    this.countryService.searchCountry(term)
      .subscribe(
        (countries) => {
          this.suggestedCountries = countries.splice(0, 5);
        },
        (err) => {
          this.suggestedCountries = []
        }
      );
  }
  findSuggested(term: string) {
    this.find(term);
  }
}
