import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class ByRegionComponent {

  public regions: string[] = ["africa", "americas", "asia", "europe", "oceania"];
  public activeRegion: string = "";
  public countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  activateRegion(region: string) {
    if (region !== this.activeRegion) {
      this.activeRegion = region;

      this.countries = [];
      this.countryService.findRegion(region)
        .subscribe(countries => {
          this.countries = countries;
        });
    }
  }

  getCSSClass(region: string) {
    return `btn ${this.activeRegion === region ? "btn-primary" : "btn-outline-primary"}`;
  }

}
