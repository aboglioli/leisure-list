import { TestBed, inject } from '@angular/core/testing';

import { TheMovieDbService } from './the-movie-db.service';

describe('TheMovieDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TheMovieDbService]
    });
  });

  it('should ...', inject([TheMovieDbService], (service: TheMovieDbService) => {
    expect(service).toBeTruthy();
  }));
});
