import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { config } from '../../config/themoviedb';

@Injectable()
export class TheMovieDbService {

  constructor(private http: Http) { }

  search(query: string): Observable<any> {
    const search = this.createBaseSearchParams();
    search.set('query', query);

    return this.http.get('https://api.themoviedb.org/3/search/movie', { search })
      .map(res => res.json());
  }

  private createBaseSearchParams(): URLSearchParams {
    const search = new URLSearchParams();
    search.set('api_key', config.apiKey);
    search.set('language', config.language);

    return search;
  }

}
