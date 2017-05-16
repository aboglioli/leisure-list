import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { config } from '../../config/the-movie-db';
import { makeUrl } from '../../utils';
import { TMDBConfiguration } from '../../model';

@Injectable()
export class TheMovieDbService {
  private config: TMDBConfiguration;

  constructor(private http: Http) {
    const search = this.createBaseSearchParams();

    this.http.get(makeUrl(config.url, 'configuration'), { search })
      .map(res => res.json())
      .subscribe(res => this.config = res);
  }

  getImageUrl(partialUrl: string): string {
    if(!partialUrl)
      return '';

    return makeUrl(this.config.images.secure_base_url, 'w185', partialUrl);
  }

  search(query: string): Observable<any> {
    const search = this.createBaseSearchParams();
    search.set('query', query);

    return this.http.get(makeUrl(config.url, 'search/movie'), { search })
      .map(res => res.json());
  }

  private createBaseSearchParams(): URLSearchParams {
    const search = new URLSearchParams();
    search.set('api_key', config.apiKey);
    search.set('language', config.language);

    return search;
  }

}
