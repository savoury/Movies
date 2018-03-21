import { TestBed, inject } from '@angular/core/testing';

import { MovieDetailGuardService } from './movie-detail-guard.service';

describe('MovieDetailGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDetailGuardService]
    });
  });

  it('should be created', inject([MovieDetailGuardService], (service: MovieDetailGuardService) => {
    expect(service).toBeTruthy();
  }));
});
