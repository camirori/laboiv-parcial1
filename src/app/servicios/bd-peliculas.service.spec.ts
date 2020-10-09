import { TestBed } from '@angular/core/testing';

import { BdPeliculasService } from './bd-peliculas.service';

describe('BdPeliculasService', () => {
  let service: BdPeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdPeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
