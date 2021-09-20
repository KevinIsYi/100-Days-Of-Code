import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable /*, of */ } from 'rxjs';
import { Country } from '../interfaces/country.interface';
// import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url);
    // return this.http
    //   .get(url)
    //   .pipe(
    //     catchError(err => of([]))
    //   );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url);
  }

  getCountryByCode(term: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${term}`;
    return this.http.get<Country>(url);
  }

  findRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url);
  }

}
