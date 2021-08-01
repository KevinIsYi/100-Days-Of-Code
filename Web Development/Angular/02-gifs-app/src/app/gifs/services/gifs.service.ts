import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _history: string[] = [];
  private serviceUrl = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'PrFHgYD6zFRYE64R9MAysT9jSCFouG83';
  public results: Gif[] = [];

  constructor(private http: HttpClient) {
    const history = localStorage.getItem('history');

    if (history) {
      this._history = JSON.parse(history);
    }
  };

  get history() {
    return [...this._history];
  }


  searchGifs(query: string) {
    query = query.trim().toLowerCase();

    if (query.trim().length > 0 && !this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http.get<SearchGifsResponse>(
      `${this.serviceUrl}/search`, {
        params
      })
      .subscribe((resp) => {
        this.results = resp.data;
        localStorage.setItem('history', JSON.stringify(this.history));
      })

  }
}
