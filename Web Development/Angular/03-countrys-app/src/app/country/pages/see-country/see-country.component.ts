import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {

  public country!: Country;

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.getCountryByCode(id)),
        tap(c => console.log(c))
      )
      .subscribe(country => {
        this.country = country;
      })
    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     this.countryService.getCountryByCode(id)
    //       .subscribe(country => {
    //         console.log(country);

    //       });
    //   });
  }

}
