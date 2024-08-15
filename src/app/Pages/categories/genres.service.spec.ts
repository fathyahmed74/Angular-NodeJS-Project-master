import { TestBed } from '@angular/core/testing';
import { GenreService } from './genres.service';

describe('GenresService', () => {
  let service: GenreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
